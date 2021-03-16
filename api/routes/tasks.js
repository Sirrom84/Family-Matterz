const express = require("express");
const router = express.Router();
const Task = require("../DB/models/Task");

router.get("/", (req, res) => {
	res.send("hello");
});

router.post("/create", (req, res) => {
	const taskItem = new Task(req.body);
	Task.create(taskItem)
		.then(() => {
			console.log("Item Inserted");
		})
		.catch((err) => {
			console.log(err);
		});
});

// router.get("/find", (req, res) => {
// 	Task.findById(id)
// 		.then(function (id) {
// 			res.send(id);
// 			console.log(`Here's id number: ${id} use as you please`);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });
//working below
router.delete("/delete/:key", (req, res) => {
	Task.findOneAndDelete(req.params)

		.then(function (task) {
			console.log(req.params, "HERE");
			res.send(task);
			console.log(`Task: ${task.title}. Was sucessfully removed from the DB`);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
// STOPPED AT NOT BEING ABLE TO POST TO LOCAL 9000 NEED TO LOOK INTO FURTHER ALSO, GETTING MORGAN INFO IN API TERM?
