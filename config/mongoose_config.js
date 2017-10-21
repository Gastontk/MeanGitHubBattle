console.log('Loading /config/mongoose_config.js');
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/githubbattle', {useMongoClient: true}, function(err, db){
	if(err){
		console.log("error here");
		console.log(err);
	}else{
		// console.log(db);
		console.log('DB loaded and ready');
	}
});