var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'thank you',
		thankyouController: 'thankyouController',
		user: auth.getUser(user)
	}
}
