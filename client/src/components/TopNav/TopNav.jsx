import React from "react";

import "./TopNav.scss";

export default function TopNav() {
	return (
		<div>
			<div className="top-nav">
				<img className="Logo" src="./images/FamilyMatterz.svg" alt="Logo" />

				<div className="icon-container">
					<img className="top-avatar" src="./images/daughter.png" alt=""></img>
				</div>
			</div>
		</div>
	);
}
