import { client } from '@utils/common';

import { Task, Status, Priority } from '@typings';

type CreateTaskInput = {
	title: string;
	description?: string;
	dueDate?: Date;
	status?: Status;
	priority?: Priority;
};

export const getTask = ({ taskId }: { taskId: string }) => {
	return client<Task>(`/task/${taskId}`).then(res => res.data);
};

export const createTask = ({ listId, task }: { listId: string; task: CreateTaskInput }) => {
	return client(`/task/${listId}`, {
		method: 'POST',
		data: task
	});
};

export const updateTask = ({ taskId, task }: { taskId: string; task: Partial<Omit<Task, 'id'>> }) => {
	return client(`/task/${taskId}`, {
		method: 'PATCH',
		data: task
	});
};
