import React, {useState, useEffect} from "react";
import CreateTask from "./CreateTask";
import {Avatar} from "primereact/avatar";
import uuid from "react-uuid";
import axios from "axios";
import TopNav from "../TopNav/TopNav";
import BottomNav from "../BottomNav/BottomNav";
import "./Todo.scss";

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
					onClick={() => completeTask(task.key)}>
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
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const getUrl = `http://localhost:9000/tasks`;
		axios
			.get(getUrl)
			.then((response) => {
				setTasks(response.data);
			})
			.catch((err) => {
				console.log("HERES THE ERROR INSIDE TODO FETCH", err);
			});
	}, []);

	/// SHOW REMAING TASKS ///
	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => !task.completed).length);
	}, [tasks]);

	/// ADD NEW TASK ///
	const addTask = (title) => {
		const getItem = (tasks, title) => {
			for (const item of tasks) {
				if (item.title === title) {
					return item;
				}
			}
		};
		const newTasks = [
			...tasks,
			{key: uuid(), title: title, completed: false, completedby: ""},
		];
		const addItem = getItem(newTasks, title);
		console.log("item to add", addItem);
		const url = `http://localhost:9000/tasks/create`;
		axios.post(url, addItem).catch((err) => {
			console.log(err);
		});
		setTasks(newTasks);
		console.log(newTasks, "NEW TASKS");
	};

	//COMPLETE A TASK//
	const completeTask = (key) => {
		const url = `http://localhost:9000/tasks/complete/${key}`;
		axios
			.put(url)
			.then((res) => {
				const newTasks = [...tasks];
				const taskIndex = newTasks.findIndex((task) => task.key === key);
				newTasks[taskIndex] = res.data;
				setTasks(newTasks);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//Task is deleting from db via key assigned at creation
	const removeTask = (key) => {
		const CleanTasks = (key) => {
			const arr = tasks.filter((item) => item.key !== key);
			return arr;
		};
		console.log(key, "Item removed from tasks");
		const url = `http://localhost:9000/tasks/delete/${key}`;
		axios
			.delete(url)
			.then(() => {
				const newTasks = CleanTasks(key);
				console.log(newTasks);
				setTasks(newTasks);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
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
			<BottomNav />
		</div>
	);
};
