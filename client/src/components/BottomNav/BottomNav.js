import React from "react";
import "./BottomNav.scss";
import {FcInspection} from "react-icons/fc";
import {FcPlanner} from "react-icons/fc";
import {FcHome} from "react-icons/fc";
import {FcShop} from "react-icons/fc";
import {Link} from "react-router-dom";
export const BottomNav = () => {
	return (
		<div className="nav">
			<div className="nav-item">
				<Link to="/">
					<FcHome />
					<span>Home</span>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/calander">
					<FcPlanner />
					<span>Calander</span>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/todolist">
					<FcInspection />
					<span>To-Do</span>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/grocerylist">
					<FcShop />
					<span>Pantry</span>
				</Link>
			</div>
		</div>
	);
};
