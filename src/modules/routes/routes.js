const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createNewTask,
  daleteTask,
  changeTaskInfo,
} = require("../controllers/taskController");


router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.delete("/deleteTasks", daleteTask);
router.patch("/updateTasks", changeTaskInfo);

module.exports = router;
