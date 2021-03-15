import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./TimelineHome.scss";

export const TimelineHome = (props) => {
	return (
		<div className="grid-container">
			<div className="one">
				<h3>Calendar</h3>
			</div>
			<div className="two">
				<h3>Todo</h3>
			</div>
			<div className="three">
				<h3>Dinner Survey</h3>
			</div>
			<div className="four">
				<h3>Grocery List</h3>
			</div>
			<div className="five">
				<h3>Random</h3>
			</div>
		</div>
	);
};
