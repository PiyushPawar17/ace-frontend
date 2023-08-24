import Task from '@components/Task';

import { Task as TaskType } from '@typings';

interface TasksSectionProps {
	title: string;
	tasks: TaskType[];
}

const TasksSection: React.FC<TasksSectionProps> = ({ title, tasks }) => {
	return (
		<div>
			<h3 className="font-semibold text-xl mb-2">{title}</h3>
			{tasks.length > 0 ? (
				<div className="flex flex-col gap-2">
					{tasks.map(task => (
						<Task key={task.id} />
					))}
				</div>
			) : (
				<p className="text-neutral-60 text-sm">No tasks {title.toLowerCase()}</p>
			)}
		</div>
	);
};

export default TasksSection;
