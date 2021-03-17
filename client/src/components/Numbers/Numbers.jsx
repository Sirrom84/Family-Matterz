import React from "react";
import {Chart} from "primereact/chart";
import {Avatar} from "primereact/avatar";

import "./Numbers.scss";

export default function Numbers() {
	const chartData = {
		labels: ["Dad", "Mom", "Sarah", "Johnny"],
		datasets: [
			{
				data: [300, 50, 50, 50],
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE59"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE59"],
			},
		],
	};

	const lightOptions = {
		legend: {
			labels: {
				fontColor: "#495057",
			},
		},
	};

	return (
		<div className="chart_container">
			<div className="title">
				{" "}
				<h2>The Smith Family Numbers</h2>
			</div>

			<div className="members">
				{" "}
				<Avatar
					image="/images/dad2.png"
					className="task-avatar"
					size="small"
					shape="circle"
				/>
				<Avatar
					image="/images/mom.png"
					className="task-avatar"
					size="small"
					shape="circle"
				/>
				<Avatar
					image="/images/daughter.png"
					className="task-avatar"
					size="small"
					shape="circle"
				/>
				<Avatar
					image="/images/son.png"
					className="task-avatar"
					size="small"
					shape="circle"
				/>
			</div>

			<div className="fam_names"></div>
			<div className="card">
				<Chart type="doughnut" data={chartData} options={lightOptions} />
				<div></div>
			</div>
		</div>
	);
}
