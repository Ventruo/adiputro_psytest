const express = require("express");
const router = express.Router();
const { app } = require("../setup/express");

const ExamSessionRouter = require("./express_routers/exam_session_route");
const QuestionRouter = require("./express_routers/question_route");
const QuestionResultRouter = require("./express_routers/question_result_route");
const RegistrantRouter = require("./express_routers/registrant_route");
const SectionRouter = require("./express_routers/section_route");
const SectionResultRouter = require("./express_routers/section_result_route");
const TestRouter = require("./express_routers/test_route");
const TestResultRouter = require("./express_routers/test_result_route");
const LamaranRouter = require("./express_routers/lamaran_route");

const ClockRouter = require("./express_routers/clock_route");
const AuthRouter = require("./express_routers/auth_route");

// Routers
router.use("/exam_session", ExamSessionRouter);
router.use("/question", QuestionRouter);
router.use("/question_result", QuestionResultRouter);
router.use("/registrant", RegistrantRouter);
router.use("/section", SectionRouter);
router.use("/section_result", SectionResultRouter);
router.use("/test", TestRouter);
router.use("/test_result", TestResultRouter);
router.use("/lamaran", LamaranRouter);
router.use("/clock", ClockRouter);
router.use("/auth", AuthRouter);

app.use(process.env.BASE_PATH, router);
