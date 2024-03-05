import { FC } from 'react';
import FavouriteItem from './FavouriteItem';
import { useAppSelector } from '@/redux/storeHooks';
import SkeletonCartAndFavourite from '../skeleton/SkeletonCartAndFavourite';

const FavouriteList: FC = () => {
	const favourite = useAppSelector((state) => state.favouriteSlice.favourite);
	const isLoading = useAppSelector((state) => state.cartSlice.isLoading);

	if (isLoading) {
		return (
			<>
				{[
					...new Array(4).map((_, index) => (
						<SkeletonCartAndFavourite
							type='favourite'
							key={index}
						/>
					)),
				]}
			</>
		);
	}

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
