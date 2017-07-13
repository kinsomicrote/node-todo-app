// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // return statement prevents other parts of the block from running
    // if an error is encountered.
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').insertOne({
  //   text: 'Check for blogs to write tutorial',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // Users collections
  // db.collection('Users').insertOne({
  //   name: 'Henry Ford',
  //   age: 35,
  //   location: 'Texas'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.close()
})