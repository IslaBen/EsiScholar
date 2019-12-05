const teacherModel = require('../models/teacher');
var fs = require('fs');


module.exports = {
    create: function (req, res, next) {
        // var bitmap = fs.readFileSync(req.files.picture.path);
        // var encPicture = new Buffer.from(bitmap, 'base64');
        // var myPicture = {name: req.files.picture.name, data: encPicture, contentType: req.files.picture.type}
        teacherModel.create(req.body).then(function (teacher) {
            res.send(teacher);
        }).catch(err => {
            err.status = 400;
            err.message = 'Bad request',
                err.path = 'teacher => create',
                next(err);
        });
    },

    readAll: function (req, res, next) {
        teacherModel.find({}).then(function (teachers) {
            res.send(teachers);
        }).catch(err => {
            err.status = 400;
            err.message = 'Bad request',
                err.path = 'teacher => readAll',
                next(err);
        });
    },

    readById: function (req, res, next) {
        teacherModel.findById({_id: req.params.id}).then(function (teacher) {
            // var buf = new Buffer.from(teacher.picture.data,'base64');
            // fs.writeFileSync('/home/th3m7j0/WebstormProjects/API/app/public/images/image.png',buf);
            res.send(teacher);
        }).catch(err => {
            err.status = 400;
            err.message = 'Bad request',
                err.path = 'teacher => readById',
                next(err);
        });
    },

    updateGenInfoById: function (req, res, next) {
        if(req.body.firstName === "" || req.body.lastName ==="" || req.body.grade === "" || req.body.domain === "" || req.body.group === "" || req.body.articles === "")
            res.send({message: "fields must not be empty"})
        else {
            teacherModel.findByIdAndUpdate({_id: req.params.id}, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                grade: req.body.grade,
                domain: req.body.domain,
                group: req.body.group,
                articles: req.body.articles
            }).then(function (oldTeacher) {
                if (oldTeacher !== null)
                    teacherModel.findOne({_id: req.params.id}).then(function (newTeaher) {
                        res.send(newTeaher);
                    });
                else
                    res.send({message: 'teacher not found'})
            }).catch(err => {
                err.status = 400;
                err.message = 'Bad request',
                    err.path = 'teacher => updateGenInfoById',
                    next(err);
            });
        }
    },

    updateImageById: function (req, res, next) {
        // var bitmap = fs.readFileSync(req.files.picture.path);
        // var encPicture = new Buffer.from(bitmap, 'base64');
        // var myPicture = {name: req.files.picture.name, data: encPicture, contentType: req.files.picture.type}

        if(req.body.image === "")
            res.send({message: "image must not be empty"})
        else {
            teacherModel.findByIdAndUpdate({_id: req.params.id}, {image: req.body.image}).then(function (oldTeacher) {
                if (oldTeacher !== null)
                    teacherModel.findOne({_id: req.params.id}).then(function (newTeaher) {
                        res.send(newTeaher);
                    });
                else
                    res.send({message: 'teacher not found'})
            }).catch(err => {
                err.status = 400;
                err.message = 'Bad request',
                    err.path = 'teacher => updateImageById',
                    next(err);
            });
        }
    },

    delete: function (req, res, next) {
        teacherModel.findByIdAndRemove({_id: req.params.id}).then(function (oldTeacher) {
            res.send(oldTeacher);
        }).catch(err => {
            err.status = 400;
            err.message = 'Bad request',
                err.path = 'teacher => delete',
                next(err);
        });
    },

    findByAttribut: function (req,res,next) {
        switch (req.params.attribute) {
            case 'name':
                teacherModel.find({$or : [{firstName: new RegExp(`${req.params.value}`,'i')},{lastName: new RegExp(`${req.params.value}`,'i')}]}).then(function (teachers) {
                res.send(teachers);
            }).catch(err => {
                //console.log(err)
                err.status = 400;
                err.message = 'Bad request',
                    err.path = 'teacher => findByAttribut => case : name',
                    next(err);
            });
            break;
            case 'grade':
                teacherModel.find({grade: new RegExp(`${req.params.value}`,'i')}).then(function (teachers) {
                    res.send(teachers);
                }).catch(err => {
                    err.status = 400;
                    err.message = 'Bad request',
                        err.path = 'teacher => findByAttribut  => case : grade',
                        next(err);
                });
                break;
            case 'group':
                teacherModel.find({group: new RegExp(`${req.params.value}`,'i')}).then(function (teachers) {
                    res.send(teachers);
                }).catch(err => {
                    err.status = 400;
                    err.message = 'Bad request',
                        err.path = 'teacher => findByAttribut  => case : group',
                        next(err);
                });
                break;

        }

    }

};
