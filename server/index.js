const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
const PORT =  4000;
app.listen(PORT, () => {
  console.log("server 8000");
});