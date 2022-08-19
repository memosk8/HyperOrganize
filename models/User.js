const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	user_name: {type: String, required: true},
	user_last: {type: String, required: true},
	user_email: String,
	user_phone: String,
	user_team: String,
	user_role: [String], // [manager,leader,member]
	state: Boolean,
	user_tasks: [String],
	user_goals: [String],
	immediate_boss: String,
	has_events: [String],
	user_comments: [String],
	user_posts: [String]
});

module.exports = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;
