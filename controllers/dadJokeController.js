const axios = require('axios');

exports.getRandomJoke = async (req, res) => {
    try {
        const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
                'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
                'useQueryString': true
            }
        });
        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Unable to fetch joke" });
    }
};