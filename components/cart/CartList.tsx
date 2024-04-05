import { FC } from 'react';
import CartItem from './CartItem';
import { useAppSelector } from '@/redux/storeHooks';
import SkeletonCartAndFavorite from '../skeleton/SkeletonCartAndFavorite';

const CartList: FC = () => {
	const totalCartCost = useAppSelector(
		(state) => state.cartSlice.totalCartCost
	);
	const cart = useAppSelector((state) => state.cartSlice.cart);
	const isLoading = useAppSelector((state) => state.cartSlice.isLoading);

	if (isLoading) {
		return (
			<>
				{[
					...new Array(4).map((_, index) => (
						<SkeletonCartAndFavorite
							type='cart'
							key={index}
						/>
					)),
				]}
			</>
		);
	}

	return (
		<div className='mx-auto max-w-screen-xl h-[120px] my-2'>
			{cart &&
				cart.map((cartItem) => (
					<CartItem
						key={cartItem.id}
						cartItem={cartItem}
					/>
				))}
			<div className='flex gap-2 justify-end items-end mt-4 max-sm:justify-center'>
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
