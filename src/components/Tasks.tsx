import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import TasksSection from '@components/TasksSection';

import { getList } from '@handlers';

const Tasks = () => {
	const { listId } = useParams();

	const { data: list, isLoading } = useQuery({
		queryKey: ['list', listId],
		queryFn: () => getList({ listId: listId as string }),
		enabled: !!listId
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!list) {
		return <div>List not found</div>;
	}

	const inProgressTasks = list.tasks.filter(task => task.status === 'IN_PROGRESS');
	const todoTasks = list.tasks.filter(task => task.status === 'TODO');
	const completedTasks = list.tasks.filter(task => task.status === 'DONE');

	return (
		<section>
			<h1 className="font-semibold text-3xl mb-6">{list.name}&apos;s Tasks</h1>
			<section className="flex flex-col gap-10">
				<TasksSection title="In Progress" tasks={inProgressTasks} />
				<TasksSection title="Todo" tasks={todoTasks} />
				<TasksSection title="Completed" tasks={completedTasks} />
			</section>
		</section>
	);
};

export default Tasks;
