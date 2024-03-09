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
		<div className='flex justify-between items-center border px-3 my-2 rounded-md'>
			<div className='flex'>
				<div className='flex'>
					<Image
						src={cartItem.image}
						width={100}
						height={100}
						alt={cartItem.title}
					/>
					<div className='ml-5 w-40'>
						<div className='text-lg font-semibold'>{cartItem.title}</div>
						<div className=''>{cartItem.price} сум</div>
						<div className='bg-orange-300 px-2 py-05 mt-3 w-min rounded-full text-sm'>
							{cartItem.category}
						</div>
					</div>
				</div>
				<div className='flex max-sm:flex-col max-sm:justify-center items-center'>
					<Counter
						counter={cartItem.totalCount}
						id={cartItem.id}
					/>
					<div>
						<div className='sm:ml-2'>{cartItem.totalCount * +cartItem.price} сум</div>
					</div>
				</div>
			</div>
			<div className='flex mx-2'>
				<Button onClick={handleDeleteCartItem}>
					<span className='max-sm:hidden'>Delete from cart</span>
					<span>
						<LiaTrashAltSolid size='22' />
					</span>
				</Button>
			</div>
		</div>
	);
};

export default CartItem;
