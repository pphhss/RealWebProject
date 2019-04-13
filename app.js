var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var csession = require('./utils/clientSession');

var testRouter = require('./routes/test');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user/user');
var bbsRouter = require('./routes/bbs/bbs');
var cloudRouter = require('./routes/cloud/cloud');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(session({
  secret : 'keyboard',
  resave : false,
  saveUninitialized : true,
  cookie : {secure:false}
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(csession); // user side session

app.use('/', indexRouter);
app.use('/test',testRouter);
app.use('/user', usersRouter);
app.use('/bbs',bbsRouter);
app.use('/cloud',cloudRouter);

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
