var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'inventory',
		inventoryController: 'inventoryController',
		user: auth.getUser(user)
	}
}
