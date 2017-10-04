const moment = require('moment');

module.exports = function(options) {
    return function(req, res, next) {
        console.log('Log: date:' + moment().format('YYYY-MM-DD hh:mm:ss') );
        next();
    }
}