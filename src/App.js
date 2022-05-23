import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import EditorPage from './Pages/EditorPage';
import Home from './Pages/Home';
import './App.css';

function App() {
	return (
		<>
			<div>
				<Toaster
					position="top-right"
					toastOptions={{
						success: { theme: { primary: '#4aee88' } },
					}}
				></Toaster>
			</div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/editor/:roomId" element={<EditorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
