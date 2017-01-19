module.exports = {
    login: function*(next) {
        if (this.query.token === undefined || this.query.username === undefined || this.query.userpwd === undefined) {
            config.jsonRes.error = 1;
            config.jsonRes.msg = '参数错误'
            this.body = config.jsonRes;
        } else {
            config.jsonRes.data = this.query.token;
            this.body = config.jsonRes;
        }

    }
}