const utils = require('../common/utils');
const config = require('../common/config');

module.exports = {
    //首页
    index: function*(next) {

        this.throw('Error Message', 500);

        //yield this.render('index');
    },
    //登录
    login: function*(next) {
        let data = {};
        data.token = utils.sign(utils.md5(this.headers['user-agent'] + '.' + this.request.ip));
        yield this.render('login', data);
    }
}