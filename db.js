var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('email.db');

// db.serialize(function() {
  db.run("INSERT INTO email (sender, email , subject, body) VALUES ('Mister Nobody', 'mnobody@saywhat.com', 'Well, hello!', 'This is the body of the email...');");

  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  // for (var i = 0; i < 10; i++) {
  //     stmt.run("Ipsum " + i);
  // }
  // stmt.finalize();

  // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });
// });

db.close();