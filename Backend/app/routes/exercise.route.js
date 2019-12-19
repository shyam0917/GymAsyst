module.exports = (app) => {
    const exercise = require('../controller/exercise.controller.js');

    // Create a new Exercise
    app.post('/exercise', exercise.create);

     // Retrieve all Exercises
    app.get('/getAllExercises', exercise.getExercises);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update an exercise with exerciseId
    app.put('/exercise/:exerciseId', exercise.updateExercise);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}