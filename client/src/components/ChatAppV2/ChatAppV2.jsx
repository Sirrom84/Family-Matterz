import React, {useState} from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import {ContactsProvider} from "./Contexts/ContactsProvider";
import {ConversationsProvider} from "./Contexts/ConversationsProvider";
import {SocketProvider} from "./Contexts/SocketProvider";

export default function ChatAppV2() {
	const [id, setId] = useLocalStorage("3433");

	// console.log("local storage type : NOW", typeof id);

	return (
		<>
			<SocketProvider id={id}>
				<ContactsProvider>
					<ConversationsProvider id={id}>
						<Dashboard id={id} />
					</ConversationsProvider>
				</ContactsProvider>
			</SocketProvider>
		</>
	);
}
