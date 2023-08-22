import { useAuth } from '@utils/context';

import '../App.css';

function App() {
	const { isLoggedIn } = useAuth();

	return (
		<div className="App">
			<header className="App-header">
				Tasks Route
				{isLoggedIn ? (
					<a className="App-link" href="http://localhost:5000/auth/logout">
						Logout
					</a>
				) : (
					<a className="App-link" href="http://localhost:5000/auth/google/login">
						Login
					</a>
				)}
			</header>
		</div>
	);
}

export default App;
