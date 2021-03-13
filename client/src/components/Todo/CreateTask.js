import React, {useState} from "react";
import "./Task.scss";

export default function CreateTask({addTask}) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;

		addTask(value);
		setValue("");
	};

	return (
		<form class="todo-form" onSubmit={handleSubmit}>
			<input
				type="text"
				class="todo-input"
				value={value}
				placeholder="Add a task"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button class="todo-add-button" onClick={handleSubmit}>
				ADD
			</button>
		</form>
	);
}
