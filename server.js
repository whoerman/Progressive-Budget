const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// import the compression package
var compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

// enable compression middleware
app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || process.env.DEV_DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
