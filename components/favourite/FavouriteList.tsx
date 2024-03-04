import { IFavourite } from '@/types/favourite';
import { FC } from 'react';
import FavouriteItem from './FavouriteItem';
import { useAppSelector } from '@/redux/storeHooks';

const FavouriteList: FC = () => {
	const favourite = useAppSelector((state) => state.favouriteSlice.favourite);

	return (
		<div className='mx-auto max-w-screen-xl h-[120px] my-2'>
			{favourite &&
				favourite.map((favouriteItem) => (
					<FavouriteItem
						key={favouriteItem.id}
						favouriteItem={favouriteItem}
					/>
				))}
		</div>
	);
};

export default FavouriteList;
