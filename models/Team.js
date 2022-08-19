const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
    team_mgr: String,
    team_name: String,
    team_leaders: [String],
    created_at: Date,
    updated_at: Date,
    team_goals: [String],
    team_channel_log: [String],
    team_tasks: [String],
    team_events: [String],
    team_description: String
});

module.exports = mongoose.model('Team', TeamSchema);
module.exports.TeamSchema = TeamSchema;
