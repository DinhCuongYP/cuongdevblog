const mongoose = require("mongoose")

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Cuongdev_blog_dev")
    console.log("Connect successfully !!!")
  } catch (error) {
    console.log("Connect failure !!!")
  }
}

module.exports = { connect }
