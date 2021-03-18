import React, {useState} from "react";
import "./Chat.scss";

export default function CreateTask({addMessage}) {
	const [value, setValue] = useState("");

	const handleSubmit = (userInput) => {
		userInput.preventDefault();
		if (!value) return;

		addMessage(value);
		setValue("");
	};

	return (
		<form className="chat-form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="chat-input"
				value={value}
				placeholder="Say Something"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="chat-add-button" onClick={handleSubmit}>
				SEND
			</button>
		</form>
	);
}
