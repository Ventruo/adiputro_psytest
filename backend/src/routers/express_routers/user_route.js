const UserController = require('../../controller/user_controller');
const express = require('express');
const router = express.Router();

let controller = new UserController();
router.get('/login', controller.login);
router.get('/logout', controller.logout);

router.post('/create', controller.create.bind(controller));

router.
    route('/:id')
    .get((req, res) => {

    })
    .post((req, res) => {
        
    })
    .delete((req, res) => {

    });

module.exports = router;
