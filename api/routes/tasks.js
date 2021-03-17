const express = require("express");
const router = express.Router();
const Task = require("../DB/models/Task");

router.get("/", (req, res) => {
	res.send("hello");
});

//CREATE A NEW TODO AND PUT INTO DB
router.post("/create", (req, res) => {
	const taskItem = new Task(req.body);
	Task.create(taskItem)
		.then(() => {
			console.log("TODO INSERTED INTO DATABASE");
		})
		.catch((err) => {
			console.log("ERROR FROM CREATING TODO", err);
		});
});

//COMPLETE TODO VIA UUID KEY PROVIDED WHEN CREATED
router.put("/complete/:key", (req, res) => {
	const query = req.params;

	Task.findOneAndUpdate(query, {completed: true})
		.then(() => {
			console.log("ITEM HAS BEEN COMPLETED");
		})
		.catch((err) => {
			console.log("ERROR LOG FROM COMPLETED TODO", err);
		});
});

//DELETE TODO VIA UUID KEY PROVIDED WHEN CREATED
router.delete("/delete/:key", (req, res) => {
	Task.findOneAndDelete(req.params)

		.then(function (task) {
			console.log(req.params, "KEY TO DELETE");
			res.send(task);
			console.log(`Task: ${task.title}. Was sucessfully removed from the DB`);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
