import downArrow from '@assets/chevron-down.svg';

const Task = () => {
	return (
		<div className="bg-neutral-80 rounded px-8 py-5 flex justify-between">
			<div className="flex flex-col gap-4 justify-between">
				<div>
					<h4 className="text-base font-semibold mb-2">Create Context</h4>
					<p className="font-normal text-sm">Description for Create Context</p>
				</div>
				<p className="font-normal text-sm text-neutral-60">Due: 28/08/2023</p>
			</div>
			<div className="flex flex-col justify-between">
				<p className="text-xs border border-red px-3 py-2 rounded-full bg-red/30 self-end text-red">High</p>
				<button className="bg-blue px-4 py-2 rounded text-sm flex gap-1 items-center">
					<span>Move to</span>
					<img src={downArrow} alt="Down Arrow" className="w-4" />
				</button>
			</div>
		</div>
	);
};

export default Task;
