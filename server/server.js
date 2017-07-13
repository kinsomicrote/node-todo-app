const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos/:id', (req, res) => {
  let id = req.params.id
   
  // Validate id
  if (!ObjectId.isValid(id)) {
    return res.status(400).send('ID is not valid')
  }

  // Query db using findById
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(400).send()
    }
    res.send({todo})
  }).catch((e) => {
    res.status(400).send()
  })

})

app.listen(port, () => {
  console.log(`Starting on port ${port}`)
})

module.exports = {app}