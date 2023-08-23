import Navbar from '@components/Navbar';

import { useAuth } from '@utils/context';

const RootRoute = () => {
	const { isLoggedIn } = useAuth();

	return (
		<main>
			<Navbar />
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
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
		</main>
	);
};

export default RootRoute;
