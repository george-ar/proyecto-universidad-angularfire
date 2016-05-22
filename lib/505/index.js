var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'505',
		user: auth.getUser(user)
	}
}