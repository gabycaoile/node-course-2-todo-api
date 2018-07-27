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

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b5a858a99c44ffec2e4107d')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Gaby'}).toArray().then((docs) => {
    if(docs.length < 1){
      return console.log('No results found')
    }

    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to connect to MongoDB')
  });

  //Closes connection with mongoDB server
  //db.close();
});