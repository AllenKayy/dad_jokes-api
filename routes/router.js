const express = require('express');
const router = express.Router();
const { getRandomJoke } = require('../controllers/dadJokeController')

router.get("/", getRandomJoke);

module.exports = router;