import Image from 'next/image';
import { IFavorite } from '@/types/favorite';
import { FC } from 'react';
import { Button } from '../ui/button';
import { useDeleteFavoriteItemMutation } from '@/redux/favoriteApi';
import { LiaTrashAltSolid } from 'react-icons/lia';

interface FavoriteItem {
	favoriteItem: IFavorite;
}

const FavoriteItem: FC<FavoriteItem> = ({ favoriteItem }) => {
	const [deleteFavoriteItem, {}] = useDeleteFavoriteItemMutation();

	const handleDeleteFavoriteItem = () => {
		deleteFavoriteItem(favoriteItem);
	};

	return (
		<div className='mx-auto max-w-screen-xl h-[120px] flex justify-between items-center border px-3 my-2 rounded-md'>
			<div className='flex'>
				<div className='flex'>
					<Image
						src={favoriteItem.image}
						width={100}
						height={100}
						alt={favoriteItem.title}
					/>
					<div className='ml-5 w-40'>
						<div className='text-lg font-semibold'>{favoriteItem.title}</div>
						<div className=''>{favoriteItem.price} сум</div>
						<div className='bg-orange-300 px-2 py-05 mt-3 w-min rounded-full text-sm'>
							{favoriteItem.category}
						</div>
					</div>
				</div>
			</div>
			<div className='flex mr-2'>
				<Button onClick={handleDeleteFavoriteItem}>
					<span className='max-sm:hidden'>Delete from favorite</span>
					<span>
						<LiaTrashAltSolid size='22' />
					</span>
				</Button>
			</div>
		</div>
	);
};

export default FavoriteItem;
