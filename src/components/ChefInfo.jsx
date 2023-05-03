import React from 'react';

const ChefInfo = ({ chef }) => {
	console.log(chef);
	return (
		<div>
			<h2>length:{chef?.name}</h2>
		</div>
	);
};

export default ChefInfo;