import React, {useState, useEffect} from "react";
import CreateTask from "./CreateTask";
import "./Task.scss";

function Task({task, index, completeTask, removeTask}) {
	return (
		<div class="todo-task-items">
			<div style={{textDecoration: task.completed ? "line-through" : ""}}>
				{task.title}
			</div>
			<div />
			<div class="task-buttons">
				<button
					class="todo-complete-button"
					onClick={() => completeTask(index)}>
					✓
				</button>
				<button class="todo-delete-button" onClick={() => removeTask(index)}>
					✗
				</button>
			</div>
		</div>
	);
}
export const Todo = () => {
	const [tasksRemaining, setTasksRemaining] = useState(0);
	const [tasks, setTasks] = useState([
		//Testing data
		{
			title: "do the laundry",
			completed: false,
		},
		{
			title: "Grab Food after work",
			completed: false,
		},
		{
			title: "Walk the dog",
			completed: true,
		},
		{
			title: "Call insurance",
			completed: false,
		},
		{
			title: "Cut the grass",
			completed: false,
		},
		{
			title: "fold the laundry",
			completed: true,
		},
		{
			title: "brush the dog",
			completed: false,
		},
	]);

	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => !task.completed).length);
		//I'll use this tasksremaing useEffect for other features later maybe
		//displayed on the home page?
	}, [tasks]);

	const addTask = (title) => {
		const newTasks = [...tasks, {title, completed: false}];
		setTasks(newTasks);
	};

	const completeTask = (index) => {
		const newTasks = [...tasks];
		newTasks[index].completed = true;
		setTasks(newTasks);
	};

	const removeTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<div class="todo-container">
			<div class="todo-header">
				<div class="todo-count">
					<span>{tasksRemaining} Tasks remaining</span>
				</div>
			</div>
			<div class="todo-body">
				{tasks.map((task, index) => (
					<Task
						task={task}
						index={index}
						completeTask={completeTask}
						removeTask={removeTask}
						key={index}
					/>
				))}
			</div>

			<div class="create-task">
				<CreateTask addTask={addTask} />
			</div>
		</div>
	);
};
