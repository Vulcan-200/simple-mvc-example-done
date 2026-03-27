const mongoose = require('mongoose');

let dogModel;

const DogSchema = new mongoose.Schema
(
    {
        name: { type: String, required: true },
        breed: { type: String, required: true },
        age: { type: Number, required: true },
        createdDate: { type: Date, default: Date.now }
    }
);

dogModel = mongoose.model('Dog', DogSchema);

module.exports = dogModel;