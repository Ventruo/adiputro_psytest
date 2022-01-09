const express = require('express');
const router = express.Router();
const { app } = require('../setup/express');

const userRouter = require('./express_routers/user_route');

// Routers
router.use('/user', userRouter);


app.use(process.env.BASE_PATH, router);