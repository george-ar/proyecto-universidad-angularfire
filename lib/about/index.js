var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'about',
		aboutController: 'aboutController',
		user: auth.getUser(user)
	}
}