class NewsControllers {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /:slug
    show(req, res) {
        res.send('Hello World');
    }
}

module.exports = new NewsControllers();
