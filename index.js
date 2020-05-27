const express = require('express')
const app = express()
const PornHub = require('pornhub.js')
const pornhub = new PornHub()
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser());
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({})
})

app.get('/search', (req, res, next) => {
    let query = req.query.q;
    console.log(query)
    pornhub.search('Video', `asian`)
        .then(async (response) => {
            console.log(response.data);
            return res.json(response.data)
        })
        .catch((err) => {
            throw Error(err);
        })
})

app.listen(process.env.PORT | 4040, (err) => {
    if (err) throw new Error(err);
    console.log('Server running');
})