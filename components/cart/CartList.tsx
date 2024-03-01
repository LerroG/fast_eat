import { ICart } from '@/types/cart';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CartItem from './CartItem';

type CartList = {
	cart: ICart[];
	isLoading?: boolean;
	isError?: boolean;
};

const CartList: FC<CartList> = ({ cart }) => {
	const totalCartCost = useSelector(
		(state: RootState) => state.cartSlice.totalCartCost
	);

	return (
		<div className='mx-auto max-w-screen-xl h-[120px] my-2'>
			{cart &&
				cart.map((cartItem) => (
					<CartItem
						key={cartItem.id}
						cartItem={cartItem}
					/>
				))}
			<div className='flex gap-2 justify-end items-end mt-4'>
				<div className='bg-orange-400 p-2 rounded text-white'>
					<span className='text-xl'>Total Cost: </span>
					<span className='font-bold text-2xl'>{totalCartCost}</span>
					<span className='text-xl ml-2'>сум</span>
				</div>
			</div>
		</div>
	);
};

export default CartList;
