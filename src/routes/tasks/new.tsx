import Navbar from '@components/Navbar';
import List from '@components/List';
import TaskForm from '@components/TaskForm';

const NewTasksRoute = () => {
	return (
		<main>
			<Navbar />
			<section className="grid grid-cols-desktop gap-24 px-24 mt-12">
				<List />
				<TaskForm mode="create" />
			</section>
		</main>
	);
};

export default NewTasksRoute;
