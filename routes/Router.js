const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = new require('../controllers/user');
const userModel = require('.././models/userModel')

router.get('/', (req, res) => {
    res.send("Bienvenu sur mon api")
});
router.post('/register', userCtrl.addUser);
router.post('/login', userCtrl.signin);
router.get('/users', auth, userCtrl.getUsers);

module.exports = router;