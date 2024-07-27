const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordinatorSchema = new Schema({
    username: {
        type: String,
        required: true,             
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
  timestamps: true
});

const Coordinator = mongoose.model('Coordinator', coordinatorSchema);

module.exports = Coordinator;
