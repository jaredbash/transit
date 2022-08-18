const Mongoose = require('mongoose')
require('dotenv').config()

async function dbConnect () {
  Mongoose.connect(
    process.env.DB_URL
  )
    .then(() => {
      console.log('Successfully connected to MongoDB Atlas!')
    })
    .catch((error) => {
      console.log('Houston, we have a MongoDB connection problem!')
      console.log(error)
    })
}

module.exports = dbConnect
