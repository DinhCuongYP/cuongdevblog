const Couser = require('../model/Couser')
const { mongooseToObject } = require('../../untils/mongoose')

class CourseControllers {
  // [GET] /:slug
  show(req, res, next) {
    Couser.findOne({ slug: req.params.slug })
      .then((courser) => res.render('courses/show', { courser: mongooseToObject(courser) }))
      .catch((err) => {
        console.log(err)
      })
  }

  // [GET] /course/create
  create(req, res, next) {
    res.render('courses/create')
  }

  // [POST] /course/store
  store(req, res, next) {
    const formData = req.body
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
    const course = new Couser(formData)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {
        console.log(err)
      })
  }

  // [GET] /:id/me
  edit(req, res, next) {
    Couser.findById({ _id: req.params.id })
      .then((courser) => res.render('courses/edit', { courser: mongooseToObject(courser) }))
      .catch(next)
  }

  // [PUT] /:id
  update(req, res, next) {
    Couser.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/course'))
      .catch(next)
  }
}

module.exports = new CourseControllers()
