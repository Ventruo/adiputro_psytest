import jwt from "jsonwebtoken";
import pkg from "axios";
const { post } = pkg;
import dotenv from "dotenv";
dotenv.config();

import Clock from "./Clock.js";

import { initDB } from "../setup/sequelize.js";
import SectionOngoing from "../models/SectionOngoing.js";

async function initService() {
  initDB().then(() => {
    const clock = new Clock(update, 1000);
    clock.start();
  });
}

async function update() {
  // console.log("Clock Ticking");

  // Search DB if theres an on-going test
  SectionOngoing.findAll({ 
    where: {start_status: 1},
  }).then((section_ongoing) => {
    if(section_ongoing.length <= 0) return;

    // Send Test Sessions to Update to Backend
    let data = [];
    for(let i = 0 ; i < section_ongoing.length; i++){
      let countdown = Clock.second(new Date(section_ongoing[i].finish_time), new Date());

      if (countdown < 0){
        SectionOngoing.update(
          { start_status: 2 },
          { where: { id: section_ongoing[i].id} }
        );
        continue;
      }

      data.push({
        "section_id": section_ongoing[i].section_id,
        "exam_session_id": section_ongoing[i].exam_session_id,
        "countdown": countdown,
        "total_duration": section_ongoing[i].duration,
      })
    }

    let token = jwt.sign({}, process.env.CLOCK_TOKEN, {
      expiresIn: "10s",
    });
    
    console.log('\nThere are', data.length, 'tests running');
    for(let i = 0 ; i < data.length; i ++){
      console.log(`{section:${data[i].section_id}, exam_session:${data[i].exam_session_id}}`)
    }

    console.log(new Date());
    post(process.env.BACKEND_URL + "/test/tick", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((error) => {
      console.log(error.code)
    });
  })
}

export default initService;
