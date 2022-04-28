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

module.exports.daleteTask = (req, res) => {
  _id = req.query._id;
  if (!_id) {
    return res.status(422).send("Error! Params not correct");
  } else {
    Task.deleteOne({ _id }).then((result) =>
      Task.find().then((result) => res.send({ data: result }))
    );
  }
};

module.exports.changeTaskInfo = (req, res) => {
  const body = req.body;
  const query = req.query;
  try {
    if (
      !(
        body.hasOwnProperty("text") &&
        body.hasOwnProperty("sum") &&
        query.hasOwnProperty("_id")
      )
    ) {
      res.status(422).send("add params please!");
    } else {
      Task.updateOne({ _id: query._id }, body).then((result) =>
        Task.find().then((result) => res.send({ data: result }))
      );
    }
  } catch (err) {
    res.status(err).send(err);
  }
};
