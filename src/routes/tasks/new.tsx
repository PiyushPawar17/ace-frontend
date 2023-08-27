import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import List from '@components/List';
import TaskForm from '@components/TaskForm';

const NewTasksRoute = () => {
	return (
		<main>
			<Navbar />
			<Layout>
				<section className="grid xl:grid-cols-desktop lg:grid-cols-tablet gap-16 mt-12">
					<List className="hidden lg:block" />
					<TaskForm mode="create" />
				</section>
			</Layout>
		</main>
	);
};

export default NewTasksRoute;
