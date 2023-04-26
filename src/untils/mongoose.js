module.exports = {
  multipleMongoosesToObject: function (Mongooses) {
    return Mongooses.map((Mongoose) => Mongoose.toObject())
  },

  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose
  },
}
