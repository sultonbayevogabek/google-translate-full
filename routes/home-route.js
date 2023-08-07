const router = require('express').Router()
const translate = require('@vitalets/google-translate-api')

router.get('/', async (req, res) => {
    res.render('index')
})

router.post('/translate', (req, res) => {

})

module.exports = {
    path: '/',
    router
}
