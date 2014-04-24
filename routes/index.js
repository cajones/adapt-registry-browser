
/*
 * GET home page.
 */
var request = require('superagent'),
    Registry = require('../lib/Registry');

exports.index = function(req, res){
    Registry().getAll(function (err, plugins) {
        res.render('index', {
            title: 'Adapt Registry Browser',
            plugins: plugins
        });
    });
};