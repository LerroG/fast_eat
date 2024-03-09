import CardItem from './CardItem';
import { FC } from 'react';
import { IProduct } from '@/types/product';
import SceletonCard from '../skeleton/SkeletonCard';

type CardList = {
	products: IProduct[];
	isLoading?: boolean;
	isError?: boolean;
};

const CardList: FC<CardList> = ({ products, isLoading }) => {
	if (isLoading) {
		return (
			<div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 px-6 xl:px-0 gap-4 mx-auto max-w-screen-xl my-4'>
				{[...new Array(10)].map((_, index) => (
					<SceletonCard key={index} />
				))}
			</div>
		);
	}
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 px-6 xl:px-0 gap-4 mx-auto max-w-screen-xl my-4'>
			{products &&
				products.map((card) => (
					<CardItem
						key={card.id}
						card={card}
					/>
				))}
		</div>
	);
};

export default CardList;
