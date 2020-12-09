let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/DBNAME", {
  useNewUrlParser: true,
  useFindAndModify: false
});

db.User.deleteMany({}).then(() => {
  db.User.create({username: '1', password: '111111'}).then((data) => {
    console.log(data, 'username "1" with password "111111" inserted!')
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}).catch(err => {
  console.error(err);
  process.exit(1);
});


// Inserting a username and password won't work because of salting, but this code can be used to insert particular objects into the database
/*
// username 1, password 1
let seeder = 
{
  "username" : "1",
  "password" : "$2b$10$x0RdS0bqA11R9w/iljOVFe5TJOy5GQVvjiRYCqK4fscNyQAdppheW",
}

  db.User.deleteMany({})
  .then(() => db.User.insertMany(seeder))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
*/