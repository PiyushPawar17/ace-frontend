import { Link } from 'react-router-dom';

import { useAuth } from '@utils/context';

import logo from '@assets/logo.svg';

const Navbar = () => {
	const { isLoggedIn, user } = useAuth();

	return (
		<nav className="py-6 px-24 flex justify-between items-center">
			<Link to="/" className="flex gap-2 items-center text-lg">
				<img src={logo} alt="Ace Logo" className="w-10" />
				Ace
			</Link>
			{isLoggedIn ? (
				<div className="flex gap-8 items-center">
					<a
						className="text-red px-3 py-2 rounded border-red border text-sm"
						href={process.env.REACT_APP_LOGOUT_URL}
					>
						Logout
					</a>

					<div className="flex gap-3 items-center">
						<img
							src={user!.profilePicture}
							alt="Profile Picture"
							className="w-8 rounded-full aspect-square"
						/>
						<p className="text-sm">{user!.name}</p>
					</div>
				</div>
			) : (
				<a className="bg-blue px-3 py-2 rounded  text-sm" href={process.env.REACT_APP_LOGIN_URL}>
					Login
				</a>
			)}
		</nav>
	);
};

export default Navbar;
