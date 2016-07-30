var wx = require('../models/wxHotNews');

module.exports = {
    //首页
    index:function *(next){
      try {
        var res = yield wx.getList(1,10);
        var data={};
        if(res.code == '200'){
          data.news = JSON.stringify(res.newslist);
        }
        yield this.render('index',data);
      } catch (e) {
        console.log(e);
      }
    }
};
