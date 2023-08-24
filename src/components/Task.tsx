import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import downArrow from '@assets/chevron-down.svg';

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
	return (
		<div className="bg-neutral-80 rounded px-8 py-5 flex justify-between">
			<div className="flex flex-col gap-4 justify-between">
				<div>
					<h4 className="text-base font-semibold mb-2">{task.title}</h4>
					<p className="font-normal text-sm">{task.description}</p>
				</div>
				{task.dueDate && <p className="font-normal text-sm text-neutral-60">Due: {task.dueDate.getDate()}</p>}
			</div>
			<div className="flex flex-col justify-between gap-4">
				<p className="text-xs border border-red px-3 py-2 rounded-full bg-red/30 self-end text-red capitalize">
					{task.priority.toLowerCase()}
				</p>
				<Menu as="div" className="relative isolate">
					<Menu.Button className="bg-blue px-4 py-2 rounded text-sm flex gap-1 items-center">
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
													} group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
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
	);
};

export default Task;
