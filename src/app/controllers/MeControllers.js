const Couser = require('../model/Couser')
const { multipleMongoosesToObject } = require('../../untils/mongoose')

class MeControllers {
  // [GET] /stoted
  stored(req, res, next) {
    Couser.find()
      .then((coursers) =>
        res.render('me/stored', { coursers: multipleMongoosesToObject(coursers) })
      )
      .catch(next)
  }
}

module.exports = new MeControllers()
