import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@utils/context';
import { getUserList } from '../handlers/user';

interface ListProps {
	setSelectedList: React.Dispatch<React.SetStateAction<string | null>>;
}

const List: React.FC<ListProps> = ({ setSelectedList }) => {
	const { isLoggedIn, user } = useAuth();

	const { data: lists, isLoading } = useQuery({
		queryKey: ['lists', user?.id],
		queryFn: getUserList,
		onSuccess: lists => {
			setSelectedList(lists[0].id);
		},
		enabled: isLoggedIn
	});

	return (
		<section>
			<section className="rounded bg-neutral-80">
				<h3 className="p-6 font-semibold text-xl">Your Lists</h3>
				<ul className="mb-3">
					{isLoading ? (
						<div className="py-3 px-6">Loading</div>
					) : (
						lists?.map(list => (
							<li key={list.id} className="text-base py-3 px-6">
								{list.name}
							</li>
						))
					)}
				</ul>
				<div className="px-6 pb-6">
					<button className="w-full bg-neutral-80 border border-dashed border-neutral-60 rounded text-center py-3 text-neutral-60 text-sm">
						+ Add New List
					</button>
				</div>
			</section>
		</section>
	);
};

export default List;
