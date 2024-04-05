import Image from 'next/image';
import Counter from './Counter';
import { ICart } from '@/types/cart';
import { FC } from 'react';
import { Button } from '../ui/button';
import { useDeleteCartItemMutation } from '@/redux/cartApi';
import { LiaTrashAltSolid } from 'react-icons/lia';

interface CartItemProps {
	cartItem: ICart;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const [deleteCartItem, {}] = useDeleteCartItemMutation();

	const handleDeleteCartItem = () => {
		deleteCartItem(cartItem);
	};

	return (
		<div className='flex justify-between items-center border px-3 my-2 rounded-md max-sm:px-0'>
			<div className='flex sm:w-2/5 max-sm:w-1/4 max-sm:mb-4'>
				<Image
					src={cartItem.image}
					width={100}
					height={100}
					alt={cartItem.title}
				/>
				<div className='ml-5 w-40 max-sm:flex max-sm:items-center'>
					<div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2'>
						<div className='text-lg font-semibold max-sm:break-all'>{cartItem.title}</div>
						<div className='max-sm:text-nowrap'>{cartItem.price} сум</div>
					</div>
					<div className='bg-orange-300 px-2 mt-3 w-min rounded-full text-sm max-sm:hidden'>
						{cartItem.category}
					</div>
				</div>
			</div>
			<div className='flex sm:w-3/5 justify-between items-center'>
				<div className='flex max-sm:flex-col max-sm:justify-center items-center'>
					<Counter
						counter={cartItem.totalCount}
						id={cartItem.id}
					/>
					<div>
						<div className='sm:ml-2'>
							{cartItem.totalCount * +cartItem.price} сум
						</div>
					</div>
				</div>

				<div className='flex mx-2'>
					<Button size="sm" onClick={handleDeleteCartItem}>
						<span className='max-sm:hidden'>Delete from cart</span>
						<span>
							<LiaTrashAltSolid size='22' />
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
