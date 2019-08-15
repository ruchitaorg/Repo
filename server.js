/**
 * the survey application used in tutorial
 */

var expresss = require('express')
var paths = require('path')
var bodyParser = require('body-parser');
var session = require('express-session');

var survey = require('./app/routes/survey.server.routes');
var surveysession = require('./app/routes/surveysession.server.routes');

var app = expresss()
app.locals.products=['iphone 7', 'huawei p9', 'Pixel XL', 'Samsung S7','Sony Xperia']
app.locals.surveyresults = {
	fp:[0,0,0,0],
	mp:[0,0,0,0]
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.set('views', path.join(__dirname,'app/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'ssshhhh', cookie: {maxAge: 600000}}));
app.use('/survey', survey);
app.use('/session', surveysession);

app.listen(4000, function () {
  console.log('survey app listening on port 3000!')
})