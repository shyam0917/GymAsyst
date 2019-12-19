const mongoose = require('mongoose');

const ExerciseSchema = mongoose.Schema({
		category:  { type: String,
			required: [true, 'Enter Exercise Category']
			 },
    types: [
        {
			 name:  { type: String,
			},
       Equipment: { type: String },
       Description: { type: String},
       image: String,
       RecommendedVideo: String    
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', ExerciseSchema);