const crypto = require('../common/crypto');
const config = require('../common/config');

module.exports = {
    //首页
    index: function*(next) {
        yield this.render('index');
    },
    //登录
    login: function*(next) {
        let data = {};
        data.token = crypto.sign(crypto.cyptomd5(this.headers.user_agent + '.' + this.req.ip));
        yield this.render('login', data);
    }
}