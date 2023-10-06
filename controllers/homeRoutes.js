const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get('/login', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/signup.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/teacher', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/teacherview.html'));
    } catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;