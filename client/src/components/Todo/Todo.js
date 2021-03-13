<<<<<<< HEAD:client/src/components/Todo/Todo.js
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
		// {
		// 	user: "Dad",
		// },
		{
			title: "laundry",
			completed: false,
			completedBy: "Dad",
		},
		{
			title: "Grab Food after work",
			completed: false,
			completedBy: "",
		},
		{
			title: "Walk the dog",
			completed: true,
			completedBy: "Mom",
		},
		{
			title: "Call insurance",
			completed: false,
			completedBy: "Dad",
		},
		{
			title: "Cut the grass",
			completed: false,
			completedBy: "",
		},
	]);

	//////for testing////
	class User {
		constructor(name, age, email) {
			this.name = name;
			this.age = age;
			this.email = email;
		}
	}
	const dad = new User("Dad", 37, "morrisrjc@gmail.com");
	////////////////////////

	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => !task.completed).length);
		//I'll use this tasksremaing useEffect for other features later maybe
		//displayed on the home page?
	}, [tasks]);

	const addTask = (title) => {
		const newTasks = [...tasks, {title, completed: false, completedBy: ""}];
		setTasks(newTasks);
	};

	const completeTask = (index) => {
		const newTasks = [...tasks];
		newTasks[index].completed = true;
		newTasks[index].completedBy = dad.name; //for testing
		console.log(newTasks); // log for testing
		setTasks(newTasks);
	};
=======
import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className='task'
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task.title}
      <button onClick={() => completeTask(index)}>✓</button>
      <button onClick={() => removeTask(index)}>✗</button>
    </div>
  );
}
export const Todo = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    //Testing data
    {
      title: 'do the laundry',
      completed: false,
    },
    {
      title: 'Grab Food after work',
      completed: false,
    },
    {
      title: 'Walk the dog',
      completed: true,
    },
    {
      title: 'Call insurance',
      completed: false,
    },
    {
      title: 'Cut the grass',
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
    //I'll use this tasksremaing useEffect for other features later maybe
    //displayed on the home page?
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
>>>>>>> a9062f3475b867829ee1f24ede5f4bf57fb90b58:client/src/components/TaskApp/Todo.js

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

<<<<<<< HEAD:client/src/components/Todo/Todo.js
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
=======
  return (
    <div className='todo-container'>
      <div className='header'>Things TODO:({tasksRemaining})</div>

      <div className='tasks'>
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
      <div className='create-task'>
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
>>>>>>> a9062f3475b867829ee1f24ede5f4bf57fb90b58:client/src/components/TaskApp/Todo.js
};
