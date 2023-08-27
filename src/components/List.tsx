import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useParams, useNavigate, useMatches } from 'react-router-dom';

import { useAuth } from '@utils/context';
import { getUserList, createList } from '@handlers';

interface ListProps {
	className?: string;
}

const List: React.FC<ListProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [newListName, setNewListName] = useState('');
	const { isLoggedIn, user } = useAuth();
	const queryClient = useQueryClient();
	const { listId } = useParams();
	const navigate = useNavigate();
	const [matches] = useMatches();

	const closeModal = () => {
		setNewListName('');
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const { data: lists, isLoading } = useQuery({
		queryKey: ['lists', user?.id],
		queryFn: getUserList,
		onSuccess: lists => {
			if (matches.pathname === '/tasks') {
				navigate(`/tasks/${lists[0].id}`);
			}
		},
		enabled: isLoggedIn
	});

	const { mutate } = useMutation({
		mutationKey: ['new-list'],
		mutationFn: createList,
		onSuccess: () => {
			closeModal();
			queryClient.invalidateQueries(['lists', user?.id]);
		}
	});

	const addNewList = () => {
		mutate({ name: newListName });
	};

	return (
		<section className={className}>
			<section className="rounded bg-neutral-80">
				<h3 className="p-6 font-semibold text-lg sm:text-xl">Your Lists</h3>
				<ul className="mb-3">
					{isLoading ? (
						<div className="py-3 px-6">Loading</div>
					) : (
						lists?.map(list => (
							<li
								key={list.id}
								className={`${
									listId === list.id ? 'bg-blue' : ''
								} text-sm sm:text-base py-3 px-6 cursor-pointer`}
							>
								<Link to={`/tasks/${list.id}`} className="block">
									{list.name}
								</Link>
							</li>
						))
					)}
				</ul>
				<div className="px-6 pb-6">
					<button
						className="w-full bg-neutral-80 border border-dashed border-neutral-60 rounded text-center py-3 text-neutral-60 text-sm"
						onClick={openModal}
					>
						+ Add New List
					</button>
				</div>
			</section>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-80 p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-base sm:text-lg font-medium leading-6">
										Add A New List
									</Dialog.Title>
									<form onSubmit={addNewList}>
										<div className="mt-6">
											<input
												value={newListName}
												onChange={e => setNewListName(e.target.value)}
												className="bg-white w-full p-2 focus:outline-none rounded text-black"
											/>
										</div>

										<div className="mt-4 flex gap-4 text-sm">
											<button className="bg-blue px-4 py-2 rounded">Add</button>
											<button
												type="button"
												className="text-blue px-4 py-2 rounded border-blue border"
												onClick={closeModal}
											>
												Cancel
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</section>
	);
};

export default List;
