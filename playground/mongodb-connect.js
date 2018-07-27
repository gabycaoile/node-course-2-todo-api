//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Connect to the database
// Takes two arguments 
//1:url where your database lives. In prod, it would be a aws/heroku url
//2:callback function - Succeed or failed connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//err ill be undefined if no error  
//db argument is used to read and write data

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB sever');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
    
  //   console.log(JSON.stringify(result.ops, undefined, 2));

  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Gaby',
  //   age: 28,
  //   location: 'Los Angeles'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert to MongoDB server');
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  //Closes connection with mongoDB server
  db.close();
});