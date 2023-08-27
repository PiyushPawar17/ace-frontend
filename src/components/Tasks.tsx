import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

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
			<h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-6 flex flex-col gap-2 sm:flex-row justify-between sm:items-center">
				<span>{list.name}&apos;s Tasks</span>
				<Link to={`/tasks/${listId}/new`} className="text-sm bg-blue px-4 py-2 rounded font-normal self-start">
					+ Create a new task
				</Link>
			</h1>
			<section className="flex flex-col gap-10 mb-10">
				<TasksSection title="In Progress" tasks={inProgressTasks} />
				<TasksSection title="Todo" tasks={todoTasks} />
				<TasksSection title="Completed" tasks={completedTasks} />
			</section>
		</section>
	);
};

export default Tasks;
