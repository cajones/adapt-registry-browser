var Registry = function (url) {
    if(this === root) return new Registry('adapt-bower-repository.herokuapp.com');
};
Registry.prototype.getAll = function (done) {
    var request = require('superagent');
    request.get('adapt-bower-repository.herokuapp.com/packages/').end(function (response) {
        if(response.ok) {
            done(null, response.body);
        }
    });
};
module.exports = Registry;