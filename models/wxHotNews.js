var config = require('../common/config');
var fetch = require('node-fetch');

module.exports = {
    //文章列表
    getList:function *(page,size){
      try {
         var url = 'http://apis.baidu.com/txapi/weixin/wxhot?num='+size+'&rand=1&page='+page;
         var res = yield fetch(url,{ method: 'get',headers: {apikey:config.ApiStoreKey} });
         return yield res.json();
      } catch (e) {
        console.log(e);
      }
    }
};
