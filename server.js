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
  var error = false;
  if (req.param('error')) {
    error = req.param('error') == 'add' ? 'add' : 'update';
  }
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result, error: error})
  })
})

app.post('/quotes', (req, res) => {
  if (req.body.name && req.body.quote) {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
    })
  } else {
    console.log('no data')
    res.redirect('/?error=add')
  }
})

app.post('/update', (req, res) => {
  console.log(req.body);
  if (req.body.newName !== '' && req.body.newQuote !== '') {
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
  } else {
    res.redirect('/?error=update')
  }
})

app.delete('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes').findOneAndDelete({name: req.body.name, quote: req.body.quote}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Quote got deleted')
  })
})
