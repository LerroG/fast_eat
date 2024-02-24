import Image from 'next/image';
import Counter from './Counter';
import { ICart } from '@/types/cart';
import { FC } from 'react';

type CartList = {
	cart: ICart[];
	isLoading?: boolean;
	isError?: boolean;
};

const CartList: FC<CartList> = ({ cart }) => {
	console.log(cart)
	return (
		<div className='mx-auto max-w-screen-xl h-[120px] my-4'>
			{cart && cart.map(({ id, title, price, image, category, totalCount }) => (
				<div
					key={id}
					className='flex items-center mb-1 border px-3'
				>
					<Image
						src={image}
						width={100}
						height={100}
						alt={title}
					/>
					<div className='ml-5 w-40'>
						<div className='text-lg font-semibold'>{title}</div>
						<div className=''>{price} сум</div>
						<div className='bg-orange-300 px-2 py-05 mt-3 w-min rounded-full text-sm'>
							{category}
						</div>
					</div>
					<Counter counter={totalCount} />
				</div>
			))}
		</div>
	);
};

export default CartList;
