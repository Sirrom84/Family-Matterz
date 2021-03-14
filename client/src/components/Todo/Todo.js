import React, {useState, useEffect} from "react";
import CreateTask from "./CreateTask";
import {Avatar} from "primereact/avatar";
import uuid from "react-uuid";
import "./Task.scss";

function Task({task, index, completeTask, removeTask}) {
	const taskIsCompleted = task.completed;
	if (taskIsCompleted) {
		return (
			<div className="todo-task-items">
				<div style={{textDecoration: taskIsCompleted ? "line-through" : ""}}>
					{task.title}
				</div>

				<Avatar
					image="/images/daughter.png"
					className="todo-avatar"
					size="small"
					shape="circle"
				/>
				<div />
				<div className="task-buttons">
					<button
						className="todo-delete-button"
						onClick={() => removeTask(index)}>
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
					onClick={() => removeTask(index)}>
					✗
				</button>
			</div>
		</div>
	);
}
export const Todo = () => {
	const [tasksRemaining, setTasksRemaining] = useState(0);
	const [tasks, setTasks] = useState([
		{id: uuid(), title: "Walk the dog", completed: false, completedBy: ""},
		{
			id: uuid(),
			title: "Return Library Books",
			completed: false,
			completedBy: "",
		},
		{
			id: uuid(),
			title: "Take chicken out of freezer please",
			completed: true,
			completedBy: "Dad",
		},
		{id: uuid(), title: "Clean Room", completed: false, completedBy: ""},
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

	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => !task.completed).length);
		//I'll use this tasksremaing useEffect for other features later maybe
		//displayed on the home page?
	}, [tasks]);

	const addTask = (title) => {
		const newTasks = [
			...tasks,
			{id: uuid(), title, completed: false, completedBy: ""},
		];
		setTasks(newTasks);
	};

	const completeTask = (indexOfTask) => {
		console.log("Task completed");
		const newTasks = [...tasks];
		newTasks[indexOfTask].completed = true;
		newTasks[indexOfTask].completedBy = dad.name; //for testing
		// console.log(newTasks); // log for testing
		return setTasks(newTasks);
	};

	const removeTask = (indexOfTask) => {
		console.log("Item removed from task");
		const newTasks = [...tasks];
		newTasks.splice(indexOfTask, 1);
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
						task={task}
						index={index}
						completeTask={completeTask}
						removeTask={removeTask}
						key={task.id}
					/>
				))}
			</div>

			<div className="create-task">
				<CreateTask addTask={addTask} />
			</div>
		</div>
	);
};
