import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import List from '@components/List';
import Tasks from '@components/Tasks';

import { useAuth } from '@utils/context';

const TasksRoute = () => {
	const { isLoading, isLoggedIn } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && !isLoggedIn) {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main>
			<Navbar />
			<Layout>
				<section className="grid xl:grid-cols-desktop lg:grid-cols-tablet gap-16">
					<List />
					<Tasks />
				</section>
			</Layout>
		</main>
	);
};

export default TasksRoute;
