import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Navbar from '@components/Navbar';
import List from '@components/List';
import TaskForm from '@components/TaskForm';

import { getTask } from '@handlers';

const EditTasksRoute = () => {
	const { taskId } = useParams();

	const { data: task } = useQuery({
		queryKey: ['task', taskId],
		queryFn: () => getTask({ taskId: taskId || '' }),
		enabled: !!taskId
	});

	return (
		<main>
			<Navbar />
			<section className="grid grid-cols-desktop gap-24 px-24 mt-12">
				<List />
				{!task ? <div>Loading...</div> : <TaskForm mode="edit" task={task} />}
			</section>
		</main>
	);
};

export default EditTasksRoute;
