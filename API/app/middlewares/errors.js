module.exports = {
    notFound : function(req, res, next) {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    },
    handleOthers : function(err, req, res, next) {
        if(err.status === 404)
            res.status(404).json({message: '404 Not found',err:err.errors});
        else
            res.status(err.status).json({message: err.message,path:err.path,err:err.errors});
    }
}
