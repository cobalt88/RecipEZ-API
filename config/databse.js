import { Promise, connect } from "mongoose";
Promise = global.Promise;
connect(config.uri, (err) => {
  if (err) {
    console.log("Could not connect to database");
    process.exit();
  }
});
export default { mongoose };
