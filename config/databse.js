const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Could not connect to database");
    process.exit();
  }
});
module.exports = { mongoose };
