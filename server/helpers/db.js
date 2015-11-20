// Require dependencies.
var mongoose    = require('mongoose'),
    dbConfigs   = require('configs/db'),
    connection  = null;

// Create connection if does not exist.
if(!connection){
  connection = mongoose.createConnection(dbConfigs.host, dbConfigs.dbname, dbConfigs.port, {
    user: dbConfigs.user,
    pass: dbConfigs.pass
  });

  console.log('Connection established to db.');
}

// Connection instance.
module.exports = connection;