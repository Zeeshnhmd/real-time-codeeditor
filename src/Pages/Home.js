import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [roomId, setRoomId] = useState('');
	const [userName, setUserName] = useState('');

	const createNewRoom = (e) => {
		e.preventDefault();
		const id = uuidV4();
		setRoomId(id);
		toast.success('New Room Created');
	};

	const joinRoom = () => {
		//** if roomid and username is not available then show this error */
		if (!roomId || !userName) {
			toast.error('RoomId & Username is Required');
			return;
		}

		//** if roomid and username is available then redirect user to editorpage  */
		navigate(`/editor/${roomId}`, {
			state: {
				userName,
			},
		});
	};

	//** press enter key to join room */
	const handleInputEnter = (e) => {
		if (e.code === 'Enter') {
			joinRoom();
		}
	};

	return (
		<div className="homePageWrapper">
			<div className="formWrapper">
				<img
					className="homePageLogo"
					src="/code-sync.png"
					alt="code-sync-logo"
				/>
				<h4 className="mainLabel">Paste invitation Room ID</h4>
				<div className="inputGroup">
					<input
						type="text"
						className="inputBox"
						placeholder="ROOM ID"
						value={roomId}
						onChange={(e) => {
							setRoomId(e.target.value);
						}}
						onKeyUp={handleInputEnter}
					/>
					<input
						type="text"
						className="inputBox"
						placeholder="USERNAME"
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						onKeyUp={handleInputEnter}
					/>
					<button className="btn joinBtn" onClick={joinRoom}>
						Join
					</button>
					<span className="createInfo">
						If you don't have an invite then create &nbsp;
						<a href="/" className="createNewBtn" onClick={createNewRoom}>
							New Room
						</a>
					</span>
				</div>
			</div>
			<footer>
				<h4>
					Built with &#10084;&#65039; by <a href="/">Zeeshan Ahmad</a>
				</h4>
			</footer>
		</div>
	);
};

export default Home;
