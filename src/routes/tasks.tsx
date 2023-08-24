import { useState } from 'react';

import Navbar from '@components/Navbar';
import List from '@components/List';
import Tasks from '@components/Tasks';

const TasksRoute = () => {
	const [selectedList, setSelectedList] = useState<string | null>(null);

	return (
		<main>
			<Navbar />
			<section className="grid grid-cols-desktop gap-24 px-24 mt-12">
				<List selectedList={selectedList} setSelectedList={setSelectedList} />
				<Tasks selectedList={selectedList} />
			</section>
		</main>
	);
};

export default TasksRoute;
