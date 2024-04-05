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
	useAddFavoriteItemMutation,
	useDeleteFavoriteItemMutation,
} from '@/redux/favoriteApi';
import { useSession } from 'next-auth/react';

type CardType = {
	card: IProduct;
};

const CardItem: FC<CardType> = ({ card }) => {
	const [addToCart, {}] = useAddCartItemMutation();
	const [deleteCartItem, {}] = useDeleteCartItemMutation();
	const [addToFavorites, {}] = useAddFavoriteItemMutation();
	const [deleteFavoritesItem, {}] = useDeleteFavoriteItemMutation();
	const { data: session } = useSession();

	const cart = useAppSelector((state) => state.cartSlice.cart);
	const favorite = useAppSelector((state) => state.favoriteSlice.favorite);

	const isExsistsInCart = cart.some((item) => item.id === card.id);
	const isExsistsInFavorites = favorite.some((item) => item.id === card.id);

	const handleToggleToCart = () => {
		if (session) {
			if (isExsistsInCart) {
				deleteCartItem({ ...card, totalCount: 1 });
				return;
			}
			addToCart({ ...card, totalCount: 1 });
		}
	};

	const handleToggleToFavorites = () => {
		if (session) {
			if (isExsistsInFavorites) {
				deleteFavoritesItem(card);

				return;
			}
			addToFavorites(card);
		}
	};

	return (
		<Card className='hover:cursor-pointer h-[350px]'>
			<CardContent className='h-2/3'>
				<div className='relative flex justify-center'>
					<Button
						title={
							isExsistsInFavorites ? 'Remove from favorite' : 'Add to favorite'
						}
						variant='outline'
						className='absolute top-2 -right-3 p-1 max-h-8 max-w-8 rounded-full'
						onClick={handleToggleToFavorites}
					>
						{isExsistsInFavorites ? (
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
					<span className='font-bold max-xl:text-lg'>{card.title}</span>
				</div>
				<div className='flex items-center justify-between w-full h-1/2'>
					<span className='font-medium max-xl:text-lg'>{card.price} сум</span>
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
