
import React from "react";
import {Link} from "react-router-dom";

import "./TopNav.scss";

export default function TopNav() {
	return (
		<div>
			<div className="top-nav">
				<img className="Logo" src="./images/FamilyMatterz.svg" alt="Logo" />
				{/* <h2>Family Matterz</h2> */}
				<div className="icon-container">
					<img className="top-avatar" src="./images/daughter.png"></img>
				</div>
			</div>
		</div>
	);
}
