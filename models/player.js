console.log('Loading /models/player.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var PlayerSchema = new mongoose.Schema({
	id:   Number,
	name:  String,
	score: String,
	image: String,
	// _message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
// PlayerSchema.path('name').required(true, 'Name cannot be blank');
PlayerSchema.path('_id').required(true, '_ID cannot be blank');
PlayerSchema.path('score').required(true, 'Player score cannot be blank');
// PlayerSchema.path('image').required(true, 'Player cannot be blank');
mongoose.model("Player", PlayerSchema);
