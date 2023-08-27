import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@components/Layout';
import Navbar from '@components/Navbar';

import { useAuth } from '@utils/context';

import lists from '@assets/screenshots/lists.svg';
import tasks from '@assets/screenshots/tasks.svg';

const RootRoute = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useAuth();

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/tasks');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoggedIn]);

	return (
		<main>
			<Navbar />
			<Layout className="pb-20">
				<h1 className="text-center font-bold">
					<span className="block sm:text-3xl lg:text-6xl md:text-4xl text-2xl">Manage your tasks</span>
					<span className="block sm:text-4xl lg:text-6xl md:text-4xl text-2xl">
						with <span className="text-blue">Ace</span>
					</span>
				</h1>
				<section className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:gap-8 sm:gap-12 mt-10 md:mt-16">
					<div className="rotate-6">
						<img
							src={lists}
							alt="Lists feature screenshot"
							className="shadow-md shadow-neutral-80 md:w-72 sm:mx-auto"
						/>
					</div>
					<div>
						<h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">
							Organize tasks by creating separate lists
						</h2>
						<p className="mt-4 text-sm sm:text-base">Create lists that track tasks related to same topic</p>
						<p className="mt-10">
							<a
								className="underline decoration-blue decoration-2 text-blue"
								href={process.env.REACT_APP_LOGIN_URL}
							>
								Login
							</a>
							<span className="ml-1">to get started</span>
						</p>
					</div>
				</section>
				<section className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 mt-20">
					<div>
						<h2 className="lg:text-4xl md:text-2xl text-xl font-semibold">Level up by creating tasks</h2>
						<p className="mt-4 text-sm sm:text-base">
							Create tasks for the lists to track it&apos;s status, priority and due date with a title and
							description for it
						</p>
					</div>
					<div className="-rotate-3">
						<img
							src={tasks}
							alt="Tasks feature screenshot"
							className="shadow-md shadow-neutral-80 md:w-72"
						/>
					</div>
				</section>
				<section className="text-center mt-20">
					<a
						href={process.env.REACT_APP_LOGIN_URL}
						className="bg-blue rounded lg:text-xl md:text-lg text-base px-6 py-2"
					>
						Login to get started
					</a>
				</section>
			</Layout>
		</main>
	);
};

export default RootRoute;
