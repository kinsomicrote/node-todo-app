// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // return statement prevents other parts of the block from running
    // if an error is encountered.
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({_id: new ObjectID('5966ff9d4ff7490d9a4bfa44')}).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  //   db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  // db.collection('Users').find().count().then((count) => {
  //   console.log(`Users count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to find users', err)
  // })

  // db.collection('Users').find({name: 'Henry Ford'}).toArray().then((docs) => {
  //   console.log('Users')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to find users', err)
  // })

  // db.close()
})