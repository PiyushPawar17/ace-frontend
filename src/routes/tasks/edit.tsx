import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Layout from '@components/Layout';
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

			<Layout>
				<section className="grid xl:grid-cols-desktop lg:grid-cols-tablet gap-16 mt-12">
					<List className="hidden lg:block" />
					{!task ? <div>Loading...</div> : <TaskForm mode="edit" task={task} />}
				</section>
			</Layout>
		</main>
	);
};

export default EditTasksRoute;
