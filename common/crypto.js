const md5 = require('md5');
const config = require('../common/config');
const jwt = require('jsonwebtoken');

module.exports = {
    cyptomd5: function(content) {
        return md5(content);
    },
    sign: function(content) {
        return jwt.sign({
            data: content
        }, config.jwtOptions.sercet, { expiresIn: config.jwtOptions.payload.expires });
    },
    verify: function(token) {
        return jwt.verify(token, config.jwtOptions.sercet);
    }
}