import { client } from '@utils/common';

import { Task } from '@typings';

export const getTask = ({ taskId }: { taskId: string }) => {
	return client<Task>(`/task/${taskId}`).then(res => res.data);
};

export const updateTask = ({ taskId, task }: { taskId: string; task: Partial<Omit<Task, 'id'>> }) => {
	return client(`/task/${taskId}`, {
		method: 'PATCH',
		data: task
	});
};
