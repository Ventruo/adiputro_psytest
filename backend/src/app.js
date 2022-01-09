// load .env file
const dotenv = require('dotenv');
dotenv.config();

const { initExpress } = require('./setup/express');


// load everything
initExpress();
require('./routers/express_router');