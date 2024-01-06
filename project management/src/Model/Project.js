const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String
    },
    teamLead: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    teamMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, { timestamps: true });



module.exports = mongoose.model('Project', projectSchema);
