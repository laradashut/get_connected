import React from "react";
import {Link} from "react-router-dom";

const Homepage = () => (
	<div>
		<h1>What's Happening?</h1>
		<h4>New to Stay Connected?</h4>
		<Link to="/signup" className="btn btn-primary">Sign up here</Link>
	</div>
);

export default Homepage;