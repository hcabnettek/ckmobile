exports.login = function(req, res){
	res.render('login', { title: 'Login', locals:{ foo: 'bar'}});
};