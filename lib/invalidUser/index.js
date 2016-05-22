var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'invalidUser',
		invalidUserController: 'invalidUserController',
		user: auth.getUser(user)
	}
}
