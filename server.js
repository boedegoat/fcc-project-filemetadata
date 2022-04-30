require('dotenv').config()
const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()
const upload = multer()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

// upload.single('<file field name from req.body>')
app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  const { originalname: name, mimetype: type, size } = req.file
  res.json({ name, type, size })
})

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
