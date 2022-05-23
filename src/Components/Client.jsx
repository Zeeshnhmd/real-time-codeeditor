import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ userName }) => {
	return (
		<div>
			<div className="client">
				<Avatar round="14px" size={50} name={userName} />
				<span className="userName">{userName}</span>
			</div>
		</div>
	);
};

export default Client;
