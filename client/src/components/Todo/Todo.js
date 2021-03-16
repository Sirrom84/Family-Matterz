import React, {useState, useEffect} from "react";
import CreateTask from "./CreateTask";
import {Avatar} from "primereact/avatar";
import uuid from "react-uuid";
import axios from "axios";
import "./Todo.scss";

function Task({task, index, completeTask, removeTask, key}) {
	const taskIsCompleted = task.completed;
	if (taskIsCompleted) {
		return (
			<div className="todo-task-items">
				<div style={{textDecoration: taskIsCompleted ? "line-through" : ""}}>
					{task.title}
				</div>

				<Avatar
					image="/images/daughter.png"
					className="task-avatar"
					size="small"
					shape="circle"
				/>
				<div />
				<div className="task-buttons">
					<button
						className="todo-delete-button"
						onClick={() => removeTask(task.key)}>
						✗
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className="todo-task-items">
			<div style={{textDecoration: task.completed ? "line-through" : ""}}>
				{task.title}
			</div>
			<div />

			<div className="task-buttons">
				<button
					className="todo-complete-button"
					onClick={() => completeTask(index)}>
					✓
				</button>
				<button
					className="todo-delete-button"
					onClick={() => removeTask(task.key)}>
					✗
				</button>
			</div>
		</div>
	);
}
export const Todo = () => {
	const [tasksRemaining, setTasksRemaining] = useState(0);
	const [tasks, setTasks] = useState([
		{
			key: "3b552eb-85b5-188-53e-6254400d1ea",
			title: "Walk the dog",
			completed: false,
			completedBy: "",
		},
		{
			key: uuid(),
			title: "Return Library Books",
			completed: false,
			completedBy: "",
		},
		{
			key: uuid(),
			title: "Take chicken out of freezer please",
			completed: true,
			completedBy: "Dad",
		},
		{key: uuid(), title: "Tidy bedrooms", completed: false, completedBy: ""},
	]);

	//////for testing////
	class User {
		constructor(name, age, email, image) {
			this.name = name;
			this.age = age;
			this.email = email;
			this.image = image;
		}
	}
	const dad = new User("Dad", 37, "morrisrjc@gmail.com", "image here");

	////////////////////////

	const getItem = (tasks, title) => {
		for (const item of tasks) {
			if (item.title === title) {
				return item;
			}
		}
	};

	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => !task.completed).length);
		//I'll use this tasksremaing useEffect for other features later maybe
		//displayed on the home page?
	}, [tasks]);

	const addTask = (title) => {
		const newTasks = [
			...tasks,
			{key: uuid(), title: title, completed: false, completedby: ""},
		];
		const addItem = getItem(newTasks, title);
		// const addItem = {
		// 	title: "TESTING 123",
		// 	completed: false,
		// 	completedby: "Rob",
		// };
		console.log("item to add", addItem);
		const url = `http://localhost:9000/tasks/create`;
		axios.post(url, addItem).catch((err) => {
			console.log(err);
		});
		setTasks(newTasks);
		console.log(newTasks, "NEW TASKS");
	};

	const completeTask = (indexOfTask) => {
		console.log(indexOfTask, "Task completed");
		const newTasks = [...tasks];
		newTasks[indexOfTask].completed = true;
		newTasks[indexOfTask].completedBy = dad.name; //for testing
		// console.log(newTasks); // log for testing
		return setTasks(newTasks);
	};

	const removeTask = (key) => {
		console.log(key, "Item removed from task");
		const url = `http://localhost:9000/tasks/delete/${key}`;
		axios.delete(url).catch((err) => {
			console.log(err);
		});
		const newTasks = [...tasks];
		// newTasks.splice(indexOfTask, 1);
		setTasks(newTasks);
	};

	return (
		<div className="todo-container">
			<div className="todo-header">
				<div className="todo-count">
					<span>{tasksRemaining} Tasks remaining</span>
				</div>
			</div>
			<div className="todo-body">
				{tasks.map((task, index) => (
					<Task
						tasks={tasksRemaining}
						task={task}
						index={index}
						completeTask={completeTask}
						removeTask={removeTask}
						key={task.key}
					/>
				))}
			</div>

			<div className="create-task">
				<CreateTask addTask={addTask} />
			</div>
		</div>
	);
};
