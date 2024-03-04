import Image from 'next/image';
import { IFavourite } from '@/types/favourite';
import { FC } from 'react';
import { Button } from '../ui/button';
import { useDeleteFavouriteItemMutation } from '@/redux/favouriteApi';

interface FavouriteItem {
	favouriteItem: IFavourite;
}

const FavouriteItem: FC<FavouriteItem> = ({ favouriteItem }) => {
	const [deleteFavouriteItem, {}] = useDeleteFavouriteItemMutation();

	const handleDeleteFavouriteItem = () => {
		deleteFavouriteItem(favouriteItem);
	};

	return (
		<div className='mx-auto max-w-screen-xl h-[120px] flex justify-between items-center border px-3 my-2 rounded-md'>
			<div className='flex'>
				<div className='flex'>
					<Image
						src={favouriteItem.image}
						width={100}
						height={100}
						alt={favouriteItem.title}
					/>
					<div className='ml-5 w-40'>
						<div className='text-lg font-semibold'>{favouriteItem.title}</div>
						<div className=''>{favouriteItem.price} сум</div>
						<div className='bg-orange-300 px-2 py-05 mt-3 w-min rounded-full text-sm'>
							{favouriteItem.category}
						</div>
					</div>
				</div>
			</div>
			<div className='flex mr-2'>
				<Button onClick={handleDeleteFavouriteItem}>Delete from favourite</Button>
			</div>
		</div>
	);
};

export default FavouriteItem;
