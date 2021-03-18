import React, {useState, useEffect} from "react";
import SendMessage from "./SendMessage";
import {Avatar} from "primereact/avatar";
import uuid from "react-uuid";
import "./Chat.scss";

function Message({message}) {
	return (
		<div className="chat-items">
			<ul class="comment-section">
				<div class="comment user-comment">
					<Avatar
						image="/images/daughter.png"
						className="todo-avatar"
						size="small"
						shape="circle"
					/>
					{message.body}
				</div>
			</ul>
		</div>
	);
}

export const Chat = () => {
	const [messageCount, setMessageCount] = useState(0);
	const [messages, setMessages] = useState([
		{id: uuid(), body: "Forgot my gloves", sentBy: ""},
		{
			id: uuid(),
			body: "Don't forget I'm off at 2 today",
			sentBy: "",
		},
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
		setMessageCount(messages.filter((message) => message.body).length);
	}, [messages]);

	const addMessage = (body) => {
		const newMessages = [...messages, {id: uuid(), body, sentBy: ""}];
		setMessages(newMessages);
	};

	return (
		<div className="chat-container">
			<div className="chat-header">
				<div className="chat-count">
					{/* <span>{messageCount}Messgaes</span> */}
				</div>
			</div>
			<div className="chat-body">
				{messages.map((message, index) => (
					<Message message={message} index={index} key={message.id} />
				))}
			</div>

			<div className="create-message">
				<SendMessage addMessage={addMessage} />
			</div>
		</div>
	);
};
