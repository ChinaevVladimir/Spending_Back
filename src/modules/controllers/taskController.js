const Task = require("../../db/model/task/index");

module.exports.getAllTasks = (req, res) =>
  Task.find().then((result) => res.send({ data: result }));

module.exports.createNewTask = (req, res) => {
  const body = req.body;
  if (!(body.hasOwnProperty("text") && body.hasOwnProperty("sum"))) {
    res.status(422).send("add text or sum please!");
  } else {
    const { text, sum } = body;
    const task = new Task({
      text,
      sum,
      date: new Date(),
    });
    task
      .save()
      .then((result) =>
        Task.find().then((result) => res.send({ data: result }))
      );
  }
};
