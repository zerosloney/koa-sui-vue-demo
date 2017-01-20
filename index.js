const Koa = require('koa');
const app = Koa();
const bodyParser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const router = require('koa-router')();
const route = require('./routes/route');
const ex = require('./middlewares/exception');


//静态文件&ejs模板
app.use(require('koa-static')(__dirname + '/static'));
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
app.use(ex());


//启动
app.listen(7001, function() {
    console.log('app is listening on 7001 port');
});