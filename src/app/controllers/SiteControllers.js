const Couser = require('../model/Couser')
const { multipleMongoosesToObject } = require('../../untils/mongoose')

class SiteControllers {
  // [GET] /home
  index(req, res, next) {
    Couser.find()
      .then((cousers) => {
        res.render('home', { cousers: multipleMongoosesToObject(cousers) })
      })
      .catch((err) => {
        next(err)
      })
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteControllers()
