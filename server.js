const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

app.use(express.json());

try {
  mongoose.connect(
     process.env.MONGO_URI
     );
  console.log("database connected");
} catch (error) {
  console.log("error connected");
}

app.use("/api", require("./userRoutes"));

// app.use('/api', Router) // ou
const port = process.env.PORT || 8080
app.listen(port , (err) => {
    err ? console.log(err) : console.log(`server is running on http://localhost:${port} `)
});
