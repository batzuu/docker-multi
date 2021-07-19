import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<div>
			Im the other page!!
			<Link to="/">Go back to the main page.</Link>
		</div>
	);
};