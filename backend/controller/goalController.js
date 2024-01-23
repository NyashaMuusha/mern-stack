const asyncHandler = require('express-async-handler');

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
})

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body || !req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')

  } else {
    // Access the text property when it's guaranteed to exist
    const goalText = req.body.text;
    // Your logic for processing the goal text

    res.status(200).json({ message: 'Set goal' });
  }
});

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(400).json({ message: `Updated  goal ${req.params.id}` });
})

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get goals ${req.params.id}` });
})


module.exports = { getGoals, setGoal, updateGoal, deleteGoal }