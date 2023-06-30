const router = require('express').Router()
const translate = require('@vitalets/google-translate-api');
const axios = require('axios');


router.get('/', async (req, res) => {
    res.render('index', {
        title: `Og'abek Sultonbayev Translator`
    })
})


router.post('/translate', async (req, res) => {
    try {
        const {fromLanguage, toLanguage, text} = req.body

        const encodedParams = new URLSearchParams();
        encodedParams.set('q', text);
        encodedParams.set('target', toLanguage);
        encodedParams.set('source', fromLanguage);

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '4008893a79msh51b668c65f6f357p170956jsn28e222d14bd9',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams
        };

        console.log(options)

        try {
            const response = await axios.request(options);
            res.status(200).send({
                ok: true,
                text: response.data?.data?.translations[0]?.translatedText
            });
        } catch (error) {
            console.error(error);
        }
    } catch (e) {

    }
})

module.exports = {
    path: '/',
    router
}