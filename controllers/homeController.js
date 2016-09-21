const wx = require('../models/wxHotNews');
const bl = require('../models/sztBalance');

module.exports = {
    //首页
    index: function*(next) {
        try {
            let res = yield wx.getList(1, 10);
            let data = {};
            if (res.code === '200') {
                data.news = JSON.stringify(res.newslist);
            }
            yield this.render('search', data);
        } catch (e) {
            console.log(e);
        }
    },
    balance: function*(next) {
        try {
            if (this.query.no === undefined) {
                this.body = {
                    'error': '1',
                    'msg': '参数错误'
                };
            } else {
                let res = yield bl.getBalance(this.query.no);
                this.body = res;n
            }
            yield next;
        } catch (e) {
            console.log(e);
        }
    }
};
