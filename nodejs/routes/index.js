const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('log: ' + Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/about', (req, res) => {
    res.send('About Page');
});

module.exports = router;