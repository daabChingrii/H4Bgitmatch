const express = require('express');
const Model = require('../models/profileModel.js')
const Task = require('../models/taskModel.js');

const router = express.Router()

//Post Method to create Profile
router.post('/create-profile', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all profiles
router.get('/showAllProfiles', async (req, res) => {
    try{
        const data = await userProfile.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method -- to get a specific profile
router.get('/your-profile/:id', async (req, res) => {
    try{
        const data = await userProfile.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method -- to update a specific profile
router.patch('/update-profile/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await userProfile.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//To create a new task
router.post('/tasks', async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the task.' });
    }
  });

//Get all tasks
router.get('/tasks', async (req, res) => {
    try{
        const data = await Task.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found.' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the task.' });
    }
  });
module.exports = router;