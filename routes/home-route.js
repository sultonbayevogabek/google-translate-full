const router = require('express').Router()
const translate = require('@vitalets/google-translate-api')


router.get('/', async (req, res) => {
   res.render('index', {
      title: `Og'abek Sultonbayev Translator`
   })
})

router.post('/translate', (req, res) => {
   try {
      const { fromLanguage, toLanguage, text } = req.body

      translate(text, { from: fromLanguage, to: toLanguage }).then(translate => {
         res.send({
            status: 'success',
            text: translate.text
         })
      }).catch(err => {
         console.error(err);
      })
   } catch (e) {

   }
})

module.exports = {
   path: '/',
   router
}