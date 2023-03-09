const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name: {
        type: String,
    }
});




exports.Todo = mongoose.model('Todo',todoSchema);