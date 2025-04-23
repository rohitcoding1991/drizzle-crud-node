const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
require("dotenv").config()
const routes = require('./routes/user');
const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
