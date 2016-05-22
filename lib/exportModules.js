
var appInventory = require("././inventory");
var appThankyou = require("././thankyou");
var appLogin = require("././logme");
var appAbout = require("././about");
var appHome = require("././home");
var app505 = require("././505");
var app404 = require("././404");

exports.config = function(name, user, pass) {
    if(name ==='inventory'){
    	return appInventory.config(user);
    }

    else if(name ==='home'){
    	return appHome.config(user);
    }

    else if(name ==='fortune'){
    	return appFortune.config(user);
    }

    else if(name ==='logme'){
    	return appLogin.config(user);
    }

    else if(name ==='about'){
    	return appAbout.config(user);
    }

    else if(name ==='thankyou'){
    	return appThankyou.config(user);
    }

    else if(name ==='404'){
    	return app404.config(user);
    }

    else if(name ==='505'){
    	return app505.config(user);
    }
};