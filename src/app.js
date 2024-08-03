const express = require("express");
const mongoose = require("mongoose");
const syncRoute = require("./routes/syncRoute");
const logger = require("./utils/logger");

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bitekiosk");

  logger.info("Mongo connection successful!");
}

app.use("/api", syncRoute);

app.listen(3000, () => {
  logger.info("Server is running on port 3000");
});
