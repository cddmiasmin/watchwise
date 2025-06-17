const UserService = require('../services/UserService.js');

const UserController = {

    async Authentication(req, res) {
        const idToken = req.headers.authorization;

        if (!idToken) return res.json({ error: 'Token não fornecido' });
        
        try {
            const userData = await UserService.Authentication(idToken);
            return res.json({ uid: userData.uid, email: userData.email });
        } catch (err) {
            return res.json({ error: err });
        }

    }

}

module.exports = UserController;