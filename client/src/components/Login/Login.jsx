import React from "react";
import "./Login.scss";
import companyLogo from "../Login/loginName2.png";
import {Link} from "react-router-dom";

export default function Login() {
	return (
		<div className="login-container">
			<div className="login-title"></div>
			<img src={companyLogo} className="login-logo" />
			<Link to="/dashboard" style={{textDecoration: "none"}}>
				{" "}
				<div className="login-button">
					<p>SIGN-IN</p>
				</div>
			</Link>
		</div>
	);
}
