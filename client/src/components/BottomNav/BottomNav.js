import React from "react";
import "./BottomNav.scss";
import {FcInspection} from "react-icons/fc";
import {FcPlanner} from "react-icons/fc";
import {FcHome} from "react-icons/fc";
import {FcShop} from "react-icons/fc";
import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
export const BottomNav = () => {
	return (
		<div className="nav">
			<div className="nav-item">
				<Link to="/">
					<Avatar
						image="./images/Home.png"
						className="avatar"
						size="large"
						shape="circle"
					/>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/calander">
					<Avatar
						image="./images/Calendar.png"
						className="avatar"
						size="large"
						shape="circle"
					/>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/todolist">
					<Avatar
						image="./images/Todo.png"
						className="avatar"
						size="large"
						shape="circle"
					/>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/grocerylist">
					<Avatar
						image="./images/Pantry.png"
						className="avatar"
						size="large"
						shape="circle"
					/>
				</Link>
			</div>
		</div>
	);
};
