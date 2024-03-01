import { LiaPlusCircleSolid, LiaMinusCircleSolid } from 'react-icons/lia';
import { FC, useState } from 'react';
import { useUpdateCartItemMutation } from '@/redux/cartApi';

type CounterType = {
	counter: number;
	id: string;
};

const Counter: FC<CounterType> = ({ counter, id }) => {
	const [counterValue, setCounterValue] = useState(counter);
	const [updateCartCount, {}] = useUpdateCartItemMutation();

	const handleCountUpdatePlus = () => {
		let counterChangeValue = counter + 1;
		setCounterValue(counterChangeValue);
		updateCartCount({ id, totalCount: counterChangeValue });
	};

	const handleCountUpdateMinus = () => {
		if (counter > 1) {
			let counterChangeValue = counter - 1;
			setCounterValue(counterChangeValue);
			updateCartCount({ id, totalCount: counterChangeValue });
		}
	};

	return (
		<div className='flex items-center gap-2 border p-1 rounded-full h-10'>
			<LiaMinusCircleSolid
				size='28'
				className='hover:cursor-pointer hover:text-gray-400'
				onClick={handleCountUpdateMinus}
			/>
			<div className='p-1 text-lg font-medium'>{counterValue}</div>
			<LiaPlusCircleSolid
				size='28'
				className='hover:cursor-pointer hover:text-gray-400'
				onClick={handleCountUpdatePlus}
			/>
		</div>
	);
};

export default Counter;
