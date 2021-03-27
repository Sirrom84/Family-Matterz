import React from "react";
import "./BottomNav.scss";
import {GoTasklist} from "react-icons/go";
import {AiOutlineWechat} from "react-icons/ai";
import {FaHome} from "react-icons/fa";
import {FaShoppingBasket} from "react-icons/fa";
import {BiFoodMenu} from "react-icons/bi";
import {Link} from "react-router-dom";

export default function BottomNav() {
	return (
		<div className="nav">
			<div className="nav-item">
				<Link to="/todolist">
					<GoTasklist />
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/grocerylist">
					<FaShoppingBasket />
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/">
					<FaHome />
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/survey">
					<BiFoodMenu />
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/ChatApp">
					<AiOutlineWechat />
				</Link>
			</div>
		</div>
	);
}
