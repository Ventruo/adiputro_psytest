
class UserController {
    async login(req, res) {
        console.log('USER LOGIN');
        res.send('Login');
    }

    async logout(req, res) {
        console.log('USER LOGOUT');
        res.send('Logout');
    }

    create(req, res) {
        console.log('USER CREATE');
        res.send('Create User')
    }

}

module.exports = UserController;