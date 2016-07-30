const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const router = require('koa-router')();
const route = require('./routes/route');

//静态文件&ejs模板
app.use(require('koa-static')(__dirname+'/static'));
app.use(bodyParser());
render(app, {
  root: path.join(__dirname, 'views'),
  layout: '',
  viewExt: 'ejs',
  cache: false,
  debug: true
});

//路由
route(router);
app.use(router.routes()).use(router.allowedMethods());

//错误处理
app.use(function *(next) {
	if(this.status !=200 ){
    this.body='404 Not Found!';
    //跳转404页面
  }
});

app.on('error',function (err,ctx) {
	if (process.env.NODE_ENV!='production') {
		this.body='500 server error';
		console.error(err.message);
		console.error(err);
	}else{
    //跳转到错误页面
  }
});

//启动
app.listen(7001);
console.log('app is listening on 7001 port');
