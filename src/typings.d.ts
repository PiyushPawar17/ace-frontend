export interface User {
	id: string;
	name: string;
	email: string;
	profilePicture: string;
	lists: List[];
}

export interface List {
	id: string;
	name: string;
	tasks: Task[];
}

export interface Task {
	id: string;
	title: string;
	description: string;
	dueDate: Date;
	status: Status;
	priority: Priority;
	listId: string;
}

type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
