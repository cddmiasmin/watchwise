const { Router } = require('express');
const UserController = require('./controllers/UserController.js');

const router = Router();

router.get('/hello-world', (req, res) => {
    res.json('hello world!')
});

router.post('/auth', UserController.Authentication);

module.exports = router;
