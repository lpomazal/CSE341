const mongodb = require('mongodb');
const mysql = require('mysql2');
const MongoClient = mongodb.MongoClient;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  
})
let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://lpomazal:school2022@cluster0.wlsv2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
