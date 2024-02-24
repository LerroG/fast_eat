import { LiaPlusCircleSolid, LiaMinusCircleSolid } from 'react-icons/lia';
import { Input } from '../ui/input';
import { FC } from 'react';

type CounterType = {
	counter: number;
};

const Counter: FC<CounterType> = ({ counter }) => {
	return (
		<div className=' flex items-center gap-2 border p-1 rounded-full h-10'>
			<LiaMinusCircleSolid
				size='28'
				className='hover:cursor-pointer hover:text-gray-400'
			/>
			<Input
				value={counter}
				className='h-8 w-12 rounded-sm'
			/>
			<LiaPlusCircleSolid
				size='28'
				className='hover:cursor-pointer hover:text-gray-400'
			/>
		</div>
	);
};

export default Counter;
