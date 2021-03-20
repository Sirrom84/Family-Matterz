import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Numbers from "../Numbers/Numbers";
import {Todo} from "../Todo/Todo";
import Welcome from "./Welcome";
import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
import TopNav from "../TopNav/TopNav";
import Scheduler from "../Calender/Calender2";

import "./TimelineHome.scss";

export const TimelineHome = (props) => {
	return (
		<div>
			<TopNav />
			<div className="grid-container">
				<div className="one">
					<Scheduler defaultCurrentView="month" />
					<Link to="/calender" style={{textDecoration: "none"}}>
						{/* <div className="current">
							<Welcome />
						</div> */}
					</Link>

					{/* <p className="user-home-text">
						The Smith Family <br></br>Friday March 19, 2021
					</p> */}
					{/* <img className="dash-log" src="/images/newGirl.png" /> */}
					{/* <Avatar
					image="/images/daughter.png"
					className="task-avatar"
					size="large"
					shape="circle"
				/> */}
				</div>
				<Link to="/todolist">
					<div className="two"></div>
				</Link>

				<div className="three"></div>
				<Link to="/grocerylist">
					<div className="four"></div>
				</Link>
				<Link to="/recipes">
					<div className="five"></div>
				</Link>
			</div>
		</div>
	);
};
