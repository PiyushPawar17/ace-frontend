/* eslint-disable indent */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateTask } from '@handlers';

import downArrow from '@assets/icons/chevron-down.svg';
import edit from '@assets/icons/edit.svg';

import { Task as TaskTypes, Status } from '@typings';

interface TaskProps {
	task: TaskTypes;
}

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

const Task: React.FC<TaskProps> = ({ task }) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationKey: ['update-task', task.id],
		mutationFn: updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries(['list', task.listId]);
		}
	});

	const updateStatus = (status: Status) => {
		mutate({
			taskId: task.id,
			task: {
				status
			}
		});
	};

	return (
		<div className="bg-neutral-80 rounded px-8 py-5 flex flex-col sm:flex-row gap-4 justify-between">
			<div className="flex flex-col gap-4 justify-between">
				<div>
					<h4 className="text-base font-semibold mb-2">{task.title}</h4>
					<p className="font-normal text-sm">{task.description}</p>
				</div>
				{task.dueDate && <p className="font-normal text-sm text-neutral-60">Due: {task.dueDate.getDate()}</p>}
			</div>
			<div className="flex flex-col justify-between gap-4">
				<p
					className={`
						text-xs border px-2 py-1 sm:px-3 sm:py-2 rounded-full self-start sm:self-end capitalize
						${
							/* prettier-ignore */
							task.priority === 'HIGH'
								? 'border-red bg-red/30 text-red'
								: task.priority === 'MEDIUM'
									? 'border-yellow bg-yellow/30 text-yellow'
									: 'border-white bg-white/30 text-white'
						}
					`}
				>
					{task.priority.toLowerCase()}
				</p>
				<div className="flex gap-2 ml-auto sm:ml-0">
					<Link
						to={`/task/${task.listId}/edit/${task.id}`}
						className="rounded px-2 py-1 sm:px-3 lg:px-4 sm:py-2 text-xs sm:text-sm border border-blue text-blue flex items-center gap-1"
					>
						<span>Edit</span>
						<img src={edit} alt="Edit Icon" className="w-3 lg:w-4" />
					</Link>

					<Menu as="div" className="relative isolate">
						<Menu.Button className="bg-blue px-2 py-2 sm:px-3 lg:px-4 text-xs sm:text-sm rounded flex gap-1 items-center">
							<span>Move to</span>
							<img src={downArrow} alt="Down Arrow" className="w-4" />
						</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute p-1 right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
								<div className="px-1 py-1 text-black">
									{statuses
										.filter(status => status.status !== task.status)
										.map(status => (
											<Menu.Item key={status.status}>
												{({ active }) => (
													<button
														className={`${
															active ? 'bg-blue text-white' : 'text-black'
														} group flex min-w-max w-full items-center rounded px-2 py-2 text-xs sm:text-sm capitalize`}
														onClick={() => updateStatus(status.status)}
													>
														{status.title}
													</button>
												)}
											</Menu.Item>
										))}
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Task;
