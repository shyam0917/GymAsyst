const Exercise = require('../model/exercise.model.js');

// Create and Save a new Exercise
exports.create = (req, res) => {
        // Validate request
        // if(!req.body.content) {
        // 		return res.status(400).send({
        // 				message: "Note content can not be empty"
        // 		});
        // }

        // Create a Note

        const exercise = new Exercise({
            category: req.body.category,
            types: req.body.types,
                name:  req.body.name,
                Equipment: req.body.Equipment,
                Description: req.body.description,
                image: req.body.image,
                RecommendedVideo: req.body.recommendedVideo
        });

        // Save Note in the database
        exercise.save()
        .then(data => {
                res.send(data);
        }).catch(err => {
                res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                });
        });
};

// Get all exercices data
exports.getExercises=(req,res)=>{
    try {
  Exercise.find({},(err,data)=>{
if(err){
    res.status(400).send({ success:false, msg: err });
}
res.status(200).send({success:true, data: data});
    })
  }
  catch(err) {
   res.status(500).send({ success:false, msg: err });
 }
}

    // Update an exercise identified by the exerciseId in the request
exports.updateExercise=(req,res)=>{

    // Validate Request
    if(!req.body.name) {
            return res.status(400).send({
                    message: "Exercise name can not be empty"
            });
    }

    // Find note and update it with the request body
    Exercise.findByIdAndUpdate(req.params.exerciseId, {
         $push: { "types": {"name":req.body.name,"Description":req.body.Description,"RecommendedVideo":req.body.RecommendedVideo} } 
    }, {new: true})
    .then(exercise => {
            if(!exercise) {
                    return res.status(404).send({
                            message: "Exercise not found with id " + req.params.exerciseId
                    });
            }
            res.send(exercise);
    }).catch(err => {
            if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                            message: "ExerciseId not found with id " + req.params.exerciseId
                    });                
            }
            return res.status(500).send({
                    message: "Error updating exerciseId with id " + req.params.exerciseId
            });
    });

}