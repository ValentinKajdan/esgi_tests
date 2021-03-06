const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://vald:xeule2@ds125288.mlab.com:25288/esgi_test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/update', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: req.body.name, quote: req.body.quote, }, {
    $set: {
      name: req.body.newName,
      quote: req.body.newQuote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/')
  })
})

app.delete('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes').findOneAndDelete({name: req.body.name, quote: req.body.quote}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Quote got deleted')
  })
})
