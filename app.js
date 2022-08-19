var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
require('./db')
/* 

const Team = require('./models/Team')
const User = require('./models/User')


const test_team = new Team({
  team_mgr: "$elManager",
  team_name: "Los Meros",
  team_leaders: ["3434","3455","5677"],
  created_at: new Date().toISOString(),
  updated_at: null,
  team_goals: ["$Goal_id_3434", "$Goal_id_3554"],
  team_channel_log: ["$post_1","$post_2"],
  team_tasks: ["$task_1","task_2"],
  team_events: ["$event_1", "event_2"],
  team_description: "Equipo de trabajo para los meros leros"
});

const team = Team.findOne({}).lean()

const test_usr = new User({
  user_name: "Juan Mateo",
	user_last: "Vegas Moras",
	user_email: "micorreo@tuma.com",
	user_phone: "11256488",
	user_team: "$team_id",
	user_role: "Leader", // [manager,leader,member]
	state: true,
	user_tasks: ["task_1","task_2"],
	user_goals: ["goal_1","goal_2"],
	immediate_boss: "$user_id",
	has_events: ["$event_1"],
	user_comments: ["comment_1"],
	user_posts: []
});

test_usr.save(); 

test_team.save(); 

 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
