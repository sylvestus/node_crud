const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')
// @desc gets goals
// @route GET /api/goals
// @access Private
// when interacting with the database you get a promise hence use asynv await
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals);
});
// @desc posts goals
// @route POST /api/goals
// @access Private 
const setGoals = asyncHandler(async  (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add text field')
  }
  const goal = await Goal.create({
    text:req.body.text
  })
  res.status(200).json(goal);
});
// @desc updates goals
// @route PUT /api/goals/id
// @access Private 
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.status(200).json(updatedGoal);
});
// @desc deletes goals
// @route DELETE /api/goals/id
// @access Private 
const deleteGoals = asyncHandler(async (req, res) => {
     const goal = await Goal.findById(req.params.id);
     if (!goal) {
       res.status(400);
       throw new Error("Goal not found");
     }
     await Goal.deleteOne({ _id: req.params.id});
  res.status(200).json({ message: `deleted goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
};
