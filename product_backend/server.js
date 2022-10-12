require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product');

const app = express();

/* connect to data base */
async function connectToDb() {
  try{
    await mongoose.connect(process.env.DB_URL);
    console.log('Connect to database');
    app.listen(process.env.PORT, () => console.log(`Listening for port ${process.env.PORT}`));
  } catch(e) {
    console.log('Error occurs during connect to db');
  }
}
connectToDb();

app.use(express.json());

app.use('/api/products', productRoute);

