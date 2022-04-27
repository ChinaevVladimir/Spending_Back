const express = require("express");
const router = express.Router();

const { getAllTasks, createNewTask } = require("../controllers/taskController");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);

module.exports = router;
