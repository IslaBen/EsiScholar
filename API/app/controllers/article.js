const articleModel = require('../models/article');

module.exports = {
    readAll: function (req, res, next) {
        articleModel.find({}).then(function (articles) {
            res.send(articles);
        }).catch(err => {
            err.status = 400;
            err.message = 'Bad request',
                err.path = 'article => readAll',
                next(err);
        });
    },
    readById: function (req, res, next) {
        articleModel.findById({_id: req.params.id}).then(function (article) {
            res.send(article);
        }).catch(err => {
            err.status = 400;
            err.message = 'Bad request',
                err.path = 'article => readById',
                next(err);
        });
    },
    findByAttribut: function (req,res,next) {
        switch (req.params.attribute) {
            case 'issued':
                articleModel.find({'issued.date-parts': [[req.params.value]]}).then(function (articles) {
                    res.send(articles);
                }).catch(err => {
                    err.status = 400;
                    err.message = 'Bad request',
                        err.path = 'article => findByAttribut  => case : issued',
                        next(err);
                });
                break;
            case 'title':
                articleModel.find({title: new RegExp(`${req.params.value}`,'i')}).then(function (articles) {
                    res.send(articles);
                }).catch(err => {
                    err.status = 400;
                    err.message = 'Bad request',
                        err.path = 'article => findByAttribut  => case : title',
                        next(err);
                });
                break;

        }

    }
}
