const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Couser = new Schema(
  {
    name: { type: String, default: require },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, default: require },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Couser', Couser)
