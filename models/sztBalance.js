const config = require('../common/config');
const fetch = require('node-fetch');

module.exports = {
    //深圳通余额
    getBalance: function*(sztNumnber) {
        try {
            let url = 'http://apis.baidu.com/appangel/shenzhentong/shenzhentong?id=' + sztNumnber + '&format=json';
            let res = yield fetch(url, { method: 'get', headers: { apikey: config.ApiStoreKey } });
            return yield res.json();
        } catch (e) {
            throw e;
        }
    }
}