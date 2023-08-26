import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Root from '@routes/root';
import Tasks from '@routes/tasks/index';
import EditTask from '@routes/tasks/edit';
import NewTask from '@routes/tasks/new';

import { AuthProvider } from '@utils/context';

import reportWebVitals from './reportWebVitals';

import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />
	},
	{
		path: '/tasks',
		element: <Tasks />
	},
	{
		path: '/tasks/:listId',
		element: <Tasks />
	},
	{
		path: '/tasks/:listId/new',
		element: <NewTask />
	},
	{
		path: '/task/:listId/edit/:taskId',
		element: <EditTask />
	}
]);
const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
