const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')


const app = express()


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
let userInput = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/api', async function (req, res) {
    userInput = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    const response = await fetch(apiURL)
    const mcData = await response.json()
    // res.send(mcData)
    const {
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony
    } = mcData
    res.send({
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony
    });
})

app.listen(8081, function () {
    console.log('Sentiment App is listening on port 8081')
})