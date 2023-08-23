import Task from '@components/Task';

const Tasks = () => {
	return (
		<section>
			<h1 className="font-semibold text-3xl mb-6">Frontend&apos;s Tasks</h1>
			<h3 className="font-semibold text-xl mb-4">In Progress</h3>
			<Task />
		</section>
	);
};

export default Tasks;
