require('dotenv').config();
require('./database/index');
const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000; // Define uma porta padrão (3000) se não estiver definida no .env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});