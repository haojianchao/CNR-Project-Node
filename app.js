var createError = require('http-errors');
var express = require('express');
var path = require('path'); //路径
var cookieParser = require('cookie-parser'); //cookie
var logger = require('morgan'); //日志

//引入路径模块
//var indexRouter = require('./routes/index');
//接口模块
var apiIndex = require('./api/index');

//生成express实例
var app = express();

// view engine setup   设置视图路径以及后缀名
//path.join(__dirname, 'views')  __dirname 表示当前文件的绝对路径-----合并路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public  ---  图标  -- 将图标放在public文件夹下之后打开此注释语句
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 设置静态资源路径   -----   引入public下的文件时，可以不用写public，可以查看views文件夹下的index.ejs
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'uploads')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 注册路由   --   必不可少
//app.use('/', indexRouter);
app.use('/api', apiIndex);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
