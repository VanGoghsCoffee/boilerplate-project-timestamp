function logRequests(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}

exports.logRequests = logRequests;