import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import List from '@components/List';
import Tasks from '@components/Tasks';

const TasksRoute = () => {
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
