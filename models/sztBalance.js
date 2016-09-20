var config = require('../common/config');
var fetch = require('node-fetch');

module.exports = {
    //深圳通余额
    getBalance:function *(sztNumnber){
      try {
         var url = 'http://apis.baidu.com/appangel/shenzhentong/shenzhentong?id='+sztNumnber+'&format=json';
         var res = yield fetch(url,{ method: 'get',headers: {apikey:config.ApiStoreKey} });
         return yield res.json();
      } catch (e) {
        console.log(e);
      }
    }
};
