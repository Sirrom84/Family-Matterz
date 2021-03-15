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
		<form className="todo-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				value={value}
				placeholder="Add a task"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="todo-add-button" onClick={handleSubmit}>
				ADD
			</button>
		</form>
	);
}
