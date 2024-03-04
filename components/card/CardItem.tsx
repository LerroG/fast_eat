import Image from 'next/image';
import {
	LiaCartPlusSolid,
	LiaTrashAltSolid,
	LiaHeart,
	LiaHeartSolid,
} from 'react-icons/lia';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IProduct } from '../../types/product';
import { FC } from 'react';
import { Button } from '../ui/button';
import {
	useAddCartItemMutation,
	useDeleteCartItemMutation,
} from '@/redux/cartApi';
import { useAppSelector } from '@/redux/storeHooks';
import {
	useAddFavouriteItemMutation,
	useDeleteFavouriteItemMutation,
} from '@/redux/favouriteApi';

type CardType = {
	card: IProduct;
};

const CardItem: FC<CardType> = ({ card }) => {
	const [addToCart, {}] = useAddCartItemMutation();
	const [deleteCartItem, {}] = useDeleteCartItemMutation();
	const [addToFavourites, {}] = useAddFavouriteItemMutation();
	const [deleteFavouritesItem, {}] = useDeleteFavouriteItemMutation();

	const cart = useAppSelector((state) => state.cartSlice.cart);
	const favourite = useAppSelector((state) => state.favouriteSlice.favourite);

	const isExsistsInCart = cart.some((item) => item.id === card.id);
	const isExsistsInFavourites = favourite.some((item) => item.id === card.id);

	const handleToggleToCart = () => {
		if (isExsistsInCart) {
			deleteCartItem({ ...card, totalCount: 1 });
			return;
		}
		addToCart({ ...card, totalCount: 1 });
	};

	const handleToggleToFavourites = () => {
		if (isExsistsInFavourites) {
			deleteFavouritesItem(card);

			return;
		}
		addToFavourites(card);
	};

	return (
		<Card className='hover:cursor-pointer h-[350px]'>
			<CardContent className='h-2/3'>
				<Button
					title={
						isExsistsInFavourites ? 'Remove from favourite' : 'Add to favourite'
					}
					variant='outline'
					className='relative top-3 left-44 p-1 max-h-8 max-w-8 rounded-full '
					onClick={handleToggleToFavourites}
				>
					{isExsistsInFavourites ? (
						<LiaHeartSolid
							className='fill-gray-600'
							size='20'
						/>
					) : (
						<LiaHeart
							className='fill-gray-600'
							size='20'
						/>
					)}
				</Button>
				<div>
					<Image
						src={`${card.image}`}
						width={200}
						height={200}
						alt='Picture of the author'
					/>
				</div>
			</CardContent>
			<CardFooter className='flex-col h-1/3'>
				<div className='flex justify-center w-full h-1/2'>
					<span className='font-bold'>{card.title}</span>
				</div>
				<div className='flex items-center justify-between w-full h-1/2'>
					<span className='font-medium'>{card.price} сум</span>
					<Button
						title={isExsistsInCart ? 'Remove from cart' : 'Add to cart'}
						onClick={handleToggleToCart}
						size='sm'
					>
						{isExsistsInCart ? (
							<LiaTrashAltSolid size='22' />
						) : (
							<LiaCartPlusSolid size='24' />
						)}
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};

export default CardItem;
