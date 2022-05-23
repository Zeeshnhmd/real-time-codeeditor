import React, { useState } from 'react';
import Client from '../Components/Client';
import Editor from '../Components/Editor';

const EditorPage = () => {
	const [clients, setClients] = useState([
		{ socketId: 1, userName: 'Zeeshan Ahmad' },
		{ socketId: 2, userName: 'Jhon Doe' },
		{ socketId: 3, userName: 'Jhan Doe' },
	]);
	console.log(setClients);
	return (
		<div>
			<div className="mainWrap">
				<div className="aside">
					<div className="asideInner">
						<div className="logo">
							<img className="logoImage" src="/code-sync.png" alt="logo" />
						</div>
						<h3>Connected</h3>
						<div className="clientsList">
							{clients.map((client) => (
								<Client key={client.socketId} userName={client.userName} />
							))}
						</div>
					</div>
					<button className="btn copyBtn">Copy Room ID</button>
					<button className="btn leaveBtn ">Leave</button>
				</div>
				<div className="editorWrap">
					<Editor />
				</div>
			</div>
		</div>
	);
};

export default EditorPage;
