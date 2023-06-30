const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const routesPath = path.join(__dirname, 'routes')

fs.readdir(routesPath, (err, files) => {
   files.forEach(file => {
      const router = require(path.join(routesPath, file))
      app.use(router.path, router.router)
   })
});

;(async _ => {
   try {
      app.listen(2000, () => {
         console.log('SERVER LISTENING AT http://localhost:3000')
      })
   } catch (e) {
      console.log(e)
   }
})()