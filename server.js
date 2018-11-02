const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/forecast', function(req, res) {
  axios({
    url: `https://api.weather.yandex.ru/v1/forecast?lat=53.5156261&lon=49.2811153`,
    method: 'GET',
    headers: {
      'X-Yandex-API-Key': '207f45bf-9470-44e4-98e4-ded6975cf2fb', //ключ тут
      'Access-Control-Allow-Origin': '*',
      crossDomain: true,
    },
  })
    .then(response => {
      console.log(response.data.url)
      console.log(response.data.explanation)
    })
    .catch(error => {
      console.log(error)
    })
  return res.send('pong')
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
