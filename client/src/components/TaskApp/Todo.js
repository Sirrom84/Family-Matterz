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

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

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
};
