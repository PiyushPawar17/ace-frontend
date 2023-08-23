import { Link } from 'react-router-dom';

import logo from '@assets/logo.svg';

const Navbar = () => {
	return (
		<nav className="py-6 px-24 flex justify-between items-center">
			<Link to="/">
				<img src={logo} alt="Ace Logo" className="w-10" />
			</Link>
			<div className="flex gap-16 items-center">
				<div className="flex gap-8">
					<button className="bg-blue px-4 py-2 rounded">+ New List</button>
					<button className="text-red px-4 py-2 rounded border-red border">Logout</button>
				</div>
				<div className="flex gap-3 items-center">
					<img src={logo} alt="Profile Picture" className="w-9 rounded-full aspect-square" />
					<p>John Doe</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
