const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  daleteTask,
} = require("../controllers/taskController");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.delete("/deleteTasks", daleteTask);

module.exports = router;
