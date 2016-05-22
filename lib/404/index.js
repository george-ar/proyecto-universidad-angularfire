var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'404',
		user: auth.getUser(user)
	}
}