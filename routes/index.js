exports.index = function(req, res){
	res.render('index', { title: 'CKMobile', locals:{ foo: 'bar'}});
};