import CardItem from './CardItem';
import { FC } from 'react';
import { IProduct } from '@/types/product';

type CardList = {
	products: IProduct[];
	isLoading?: boolean;
	isError?: boolean;
};

const CardList: FC<CardList> = ({ products }) => {
	return (
		<div className='grid grid-cols-5 gap-4 mx-auto max-w-screen-xl my-4'>
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
