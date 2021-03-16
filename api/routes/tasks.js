const express = require("express");
const router = express.Router();
const Task = require("./DB/models/Task");

router.get("/create", (req, res) => {
	res.send("hello");
});

router.post("/create", (req, res) => {
	console.log(req.body, "REQ BODY");
	// console.log(newTask, "FROM THE SERVER NEWTASK");
	Task.create(req.body, (err, createdTask) => {
		err ? console.log(err) : console.log("created");
	});
});
module.exports = router;
// STOPPED AT NO BEING ABLE TO POST TO LOCAL 9000 NEED TO LOOK INTO FURTHER ALSO, GETTING MORGAN INFO IN API TERM?
