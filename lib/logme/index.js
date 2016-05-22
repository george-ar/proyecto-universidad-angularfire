var auth = require(__base+"lib/auth");

exports.config = function(user) {

	return {
		title:'login',
		user: auth.getUser(user)
	}
}
