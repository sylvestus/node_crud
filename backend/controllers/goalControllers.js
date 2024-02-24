const asyncHandler = require('express-async-handler')
// @desc gets goals
// @route GET /api/goals
// @access Private
// when interacting with the database you get a promise hence use asynv await
const getGoals = asyncHandler(async (req, res) => {

  res.status(200).json({ message: "Get goals" });
});
// @desc posts goals
// @route POST /api/goals
// @access Private 
const setGoals = asyncHandler(async  (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add text field')
  }
  res.status(200).json({ message: "Set goal" })
});
// @desc updates goals
// @route PUT /api/goals/id
// @access Private 
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// @desc deletes goals
// @route DELETE /api/goals/id
// @access Private 
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
};
