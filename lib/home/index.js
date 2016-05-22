var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'home',
		homeController: 'homeController',
		user: auth.getUser(user)
	}
}