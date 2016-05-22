var fs = require('fs');

var firebaseTokenGenerator = require("firebase-token-generator");

var credentials = require(__base+"credentials.js");

//Firebase TOKEN
var tokenGenerator = new firebaseTokenGenerator(credentials.tokenSecret);


var auserList = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

exports.validateUser = function(user, pass) {
	var exists = false;
	
	auserList.forEach(function(aUser) {
		if(aUser.nickname === user && aUser.password == pass){
			exists = true;
		}
	});
	
	return exists;
};

exports.getUser = function(user) {
	var myUser = {};

	myUser.name = user = typeof user !== 'undefined' ? user : 'guest';

	if(user === 'guest'){
		return myUser;
	}
	else {
		
		myUser.logged = 'logged';
		myUser.secret =  tokenGenerator.createToken({uid: getPass(user)});
		return myUser;
	}
};

function getPass(user){
	var pass = "none"
	auserList.forEach(function(aUser) {
		if(aUser.nickname === user){
			pass = aUser.password;
		}
	});

	return pass;
}