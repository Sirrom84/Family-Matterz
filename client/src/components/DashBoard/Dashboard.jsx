import React from "react";

import {Todo} from "../Todo/Todo";

import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
import TopNav from "../TopNav/TopNav";
import Scheduler from "../Calendar/Calendar";

import "./DashBoard.scss";

export const DashBoard = (props) => {
	return (
		<div className="grid-container">
			<div className="one">
				<Scheduler defaultCurrentView="month" />
			</div>
			<Link to="/todolist">
				<div className="two"></div>
			</Link>
			<Link to="/survey">
				<div className="three"></div>
			</Link>
			<Link to="/grocerylist">
				<div className="four"></div>
			</Link>
			<Link to="/recipes">
				<div className="five"></div>
			</Link>
		</div>
	);
};
