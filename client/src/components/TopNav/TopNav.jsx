import React from "react";
import {ImBubbles2} from "react-icons/im";
import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";

import {Badge} from "primereact/badge";

import "./TopNav.scss";

export default function TopNav() {
	return (
		<div>
			<div className="top-nav">
				<img
					className="Logo"
					src="./images/LogoHome.svg"
					width="auto"
					height="55px"
					alt="Logo"
				/>
				{/* <h2>Family Matterz</h2> */}
				<Avatar image="./images/daughter.png" size="large" shape="circle" />
			</div>
		</div>
	);
}
