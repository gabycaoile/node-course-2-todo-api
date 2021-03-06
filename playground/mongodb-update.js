//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB sever');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b6112c56ad9d721489c7aa5')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b5a8736b3aa57fee55701f5')
  }, {
    $set: {
      name: 'Gabrielle'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //Closes connection with mongoDB server
  //db.close();
});