module.exports = function Route(app){

	app.get('/', function(req, res){
		res.render('index', {title:'Welcome Page'});
	});

	app.get('/chat', function(req, res){
		res.render('chat', {title:'Chat Page'});
	});

	app.post('/process', function(req, res){
		req.session.name = req.body.your_name;
		req.session.sessionID = req.sessionID;
		console.log('\n\n\nsession data', req.session);
		res.end('came to this page');
	})

}