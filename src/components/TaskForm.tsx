import React, { useState, forwardRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { RadioGroup } from '@headlessui/react';
import DatePicker from 'react-datepicker';

import { createTask, updateTask } from '@handlers';

import { Status, Priority } from '@typings';

const statuses: {
	status: Status;
	title: string;
}[] = [
	{
		status: 'TODO',
		title: 'Todo'
	},
	{
		status: 'IN_PROGRESS',
		title: 'In Progress'
	},
	{
		status: 'DONE',
		title: 'Completed'
	}
];

const priorities: Priority[] = ['LOW', 'MEDIUM', 'HIGH'];

interface EditTaskFormProps {
	mode: 'edit';
	task: {
		id: string;
		listId: string;
		title: string;
		description: string;
		status: Status;
		priority: Priority;
		dueDate?: Date;
	};
}

interface CreateTaskFormProps {
	mode: 'create';
	task?: undefined;
}

const TaskForm: React.FC<EditTaskFormProps | CreateTaskFormProps> = ({ mode, task }) => {
	const [title, setTitle] = useState(mode === 'edit' ? task.title : '');
	const [description, setDescription] = useState(mode === 'edit' ? task.description : '');
	const [status, setStatus] = useState<Status>(mode === 'edit' ? task.status : 'TODO');
	const [priority, setPriority] = useState<Priority>(mode === 'edit' ? task.priority : 'LOW');
	const [dueDate, setDueDate] = useState<Date | undefined | null>(mode === 'edit' ? task.dueDate : undefined);

	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { listId } = useParams();

	const { mutate: updateTaskMutation } = useMutation({
		mutationKey: ['update-task', task?.id],
		mutationFn: updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries(['list', listId]);
			queryClient.invalidateQueries(['task', task?.id]);

			navigate(`/tasks/${listId}`);
		}
	});

	const { mutate: createTaskMutation } = useMutation({
		mutationKey: ['create-task', listId],
		mutationFn: createTask,
		onSuccess: () => {
			queryClient.invalidateQueries(['list', listId]);

			navigate(`/tasks/${listId}`);
		}
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (mode === 'edit') {
			updateTaskMutation({
				taskId: task!.id,
				task: {
					title,
					description,
					status,
					priority,
					dueDate: dueDate ? dueDate : undefined
				}
			});
		} else {
			if (!listId) {
				return;
			}

			createTaskMutation({
				listId,
				task: {
					title,
					description,
					status,
					priority,
					dueDate: dueDate ? dueDate : undefined
				}
			});
		}
	};

	return (
		<section className="mb-10">
			<h2 className="text-xl font-bold">{mode === 'edit' ? 'Edit task' : 'Create a new task'}</h2>
			<form className="mt-4 flex flex-col gap-8" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title" className="block mb-1 text-sm">
						Title
					</label>
					<input
						id="title"
						value={title}
						onChange={e => setTitle(e.target.value)}
						className="bg-neutral-700 w-full p-2 focus:outline-blue focus:outline-offset-1 focus:outline-none rounded"
					/>
				</div>
				<div>
					<label htmlFor="description" className="block mb-1 text-sm">
						Description
					</label>
					<input
						id="description"
						value={description}
						onChange={e => setDescription(e.target.value)}
						className="bg-neutral-700 w-full p-2 focus:outline-blue focus:outline-offset-1 focus:outline-none rounded"
					/>
				</div>
				<div>
					<RadioGroup value={status} onChange={setStatus}>
						<RadioGroup.Label className="mb-2 block text-sm">Status</RadioGroup.Label>
						<div className="flex sm:flex-row flex-col gap-4 sm:gap-0 items-start">
							{statuses.map(status => (
								<RadioGroup.Option key={status.status} value={status.status} as="button" type="button">
									{({ checked }) => (
										<span
											className={`${checked ? 'bg-blue px-4 py-2' : ''} sm:px-4 sm:py-2 rounded`}
										>
											{status.title}
										</span>
									)}
								</RadioGroup.Option>
							))}
						</div>
					</RadioGroup>
				</div>
				<div>
					<RadioGroup value={priority} onChange={setPriority}>
						<RadioGroup.Label className="mb-2 block text-sm">Priority</RadioGroup.Label>
						<div className="flex sm:flex-row flex-col gap-4 sm:gap-0 items-start">
							{priorities.map(priority => (
								<RadioGroup.Option key={priority} value={priority} as="button" type="button">
									{({ checked }) => (
										<span
											className={`${
												checked ? 'bg-blue px-4 py-2' : ''
											} sm:px-4 sm:py-2 rounded capitalize`}
										>
											{priority.toLowerCase()}
										</span>
									)}
								</RadioGroup.Option>
							))}
						</div>
					</RadioGroup>
				</div>
				<div>
					<label className="mb-2 block text-sm">Due Date</label>
					<DatePicker
						selected={dueDate}
						onChange={date => setDueDate(date)}
						customInput={<DatePickerInput />}
						dateFormat="dd/MM/yyyy"
						isClearable
					/>
				</div>
				<div className="flex gap-2">
					<button className="bg-blue rounded px-4 py-2 mt-4 sm:text-base text-sm self-start">
						{mode === 'edit' ? 'Update task' : 'Create task'}
					</button>
					<button
						className="border border-blue rounded px-4 py-2 mt-4 sm:text-base text-sm self-start text-blue"
						type="button"
						onClick={() => void navigate(-1)}
					>
						Cancel
					</button>
				</div>
			</form>
		</section>
	);
};

const DatePickerInput = forwardRef<HTMLButtonElement, React.HTMLProps<HTMLButtonElement>>(({ value, onClick }, ref) => {
	return (
		<button
			className="w-32 sm:w-36 text-left bg-neutral-700 rounded px-4 py-2 sm:text-base text-sm"
			onClick={onClick}
			ref={ref}
			type="button"
		>
			{!value ? 'Select a date' : value}
		</button>
	);
});

DatePickerInput.displayName = 'DatePickerInput';

export default TaskForm;
