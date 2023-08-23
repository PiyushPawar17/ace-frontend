const List = () => {
	return (
		<section className="rounded bg-neutral-80">
			<h3 className="p-6 font-semibold text-xl">Your Lists</h3>
			<ul className="mb-3">
				<li className="text-base py-3 px-6">Frontend</li>
				<li className="text-base py-3 px-6">Backend</li>
				<li className="text-base py-3 px-6">DevOps</li>
			</ul>
			<div className="px-6 pb-6">
				<button className="w-full bg-neutral-80 border border-dashed border-neutral-60 rounded text-center py-3 text-neutral-60 text-sm">
					+ Add New List
				</button>
			</div>
		</section>
	);
};

export default List;
