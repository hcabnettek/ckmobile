var express = require('express'),
  http = require('http'),
  path = require('path'),
  config = require('./config'),
  stylus = require('stylus'),
  url = require('url'),
  routes = require('./routes'),
  user = require('./routes/user');
  

var app = express();

//var db = require('./db');
//var User = db.User;

var RedisStore = require('connect-redis')(express);

app.configure(function(){
  var redisUrl = url.parse(process.env.REDISTOGO_URL);
    //redisAuth = redisUrl.auth.split(':');
  app.set('redisHost', redisUrl.hostname);
  app.set('redisPort', redisUrl.port);
  //app.set('redisDb', redisAuth[0]);
  //app.set('redisPass', redisAuth[1]);
});

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(stylus.middleware({
    src: "" + __dirname + "/views",
    dest: "" + __dirname + "/public",
    compress: true
  }));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('my super sekret hash'));
  app.use(express.session({
    secret: 'my super sekret hash',
    store: new RedisStore({
      host: app.get('redisHost'),
      port: app.get('redisPort')
      //db: app.get('redisDb'),
      //pass: app.get('redisPass')
    })
  }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/index', routes.index);
app.get('/login', user.login);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
