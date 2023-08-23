import Navbar from '@components/Navbar';
import List from '@components/List';
import Tasks from '@components/Tasks';

const TasksRoute = () => {
	return (
		<main>
			<Navbar />
			<section className="grid grid-cols-desktop gap-24 px-24 mt-12">
				<List />
				<Tasks />
			</section>
		</main>
	);
};

export default TasksRoute;
