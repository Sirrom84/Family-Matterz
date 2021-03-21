const express = require("express");
const router = express.Router();
const Task = require("../DB/models/Task");

///CREATE A NEW TODO AND PUT INTO DB///
router.post("/create", (req, res) => {
	const taskItem = new Task(req.body);
	Task.create(taskItem)
		.then(() => {
			console.log("TODO INSERTED INTO DATABASE");
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log("ERROR FROM CREATING TODO", err);
			res.sendStatus(400);
		});
});

///COMPLETE TODO VIA UUID KEY PROVIDED WHEN CREATED///
router.put("/complete/:key", (req, res) => {
	const query = req.params;

	Task.findOneAndUpdate(query, {completed: true}, {new: true})
		.then((task) => {
			console.log("ITEM HAS BEEN COMPLETED");
			res.status(200).json(task);
		})
		.catch((err) => {
			console.log("ERROR LOG FROM COMPLETED TODO", err);
			res.status(400).send(err);
		});
});

///DELETE TODO VIA UUID KEY PROVIDED WHEN CREATED///
router.delete("/delete/:key", (req, res) => {
	Task.findOneAndDelete(req.params)

		.then(function (task) {
			console.log(req.params, "KEY TO DELETE");
			res.send(task);
			console.log(`Task: ${task.title}. Was sucessfully removed from the DB`);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).send(err);
		});
});

//INTITAL GET///
router.get("/", (req, res) => {
	Task.find({}, (err, task) => {
		err ? conosle.log(err) : res.send(task),
			console.log("HERE HARE THE TASKS", task);
	});
});
module.exports = router;
