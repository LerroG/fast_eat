import { FC } from 'react';
import FavoriteItem from './FavoriteItem';
import { useAppSelector } from '@/redux/storeHooks';
import SkeletonCartAndFavorite from '../skeleton/SkeletonCartAndFavorite';

const FavoriteList: FC = () => {
	const favorite = useAppSelector((state) => state.favoriteSlice.favorite);
	const isLoading = useAppSelector((state) => state.cartSlice.isLoading);

	if (isLoading) {
		return (
			<>
				{[
					...new Array(4).map((_, index) => (
						<SkeletonCartAndFavorite
							type='favorite'
							key={index}
						/>
					)),
				]}
			</>
		);
	}

	return (
		<div className='mx-auto max-w-screen-xl h-[120px] my-2'>
			{favorite &&
				favorite.map((favoriteItem) => (
					<FavoriteItem
						key={favoriteItem.id}
						favoriteItem={favoriteItem}
					/>
				))}
		</div>
	);
};

export default FavoriteList;
