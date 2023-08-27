import { Link } from 'react-router-dom';

import Layout from '@components/Layout';

import { useAuth } from '@utils/context';

import logo from '@assets/icons/logo.svg';

const Navbar = () => {
	const { isLoggedIn, user } = useAuth();

	return (
		<nav>
			<Layout className="flex py-6 justify-between items-center mb-4">
				<Link to="/" className="flex gap-2 items-center text-lg">
					<img src={logo} alt="Ace Logo" className="w-10" />
					Ace
				</Link>
				{isLoggedIn ? (
					<div className="flex gap-8 items-center">
						<a
							className="text-red px-3 py-2 rounded border-red border text-xs sm:text-sm"
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
							<p className="hidden sm:block text-sm">{user!.name}</p>
						</div>
					</div>
				) : (
					<a className="bg-blue px-3 py-2 rounded text-sm" href={process.env.REACT_APP_LOGIN_URL}>
						Login
					</a>
				)}
			</Layout>
		</nav>
	);
};

export default Navbar;
