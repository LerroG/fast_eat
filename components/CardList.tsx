import {
	useGetProductsByCategoryQuery,
	useGetProductsQuery,
} from '@/redux/productsApi';
import CardItem from './CardItem';
import { FC } from 'react';
import { IProduct } from './types/product';

type CardList = {
	products: IProduct[];
	isLoading?: boolean;
	isError?: boolean;
};

const CardList: FC<CardList> = ({ products }) => {
	return (
		<div className='grid grid-cols-5 gap-4 mx-auto max-w-screen-xl'>
			{products.map(({ id, title, price, image, category }) => (
					<CardItem
						key={id}
						id={id}
						title={title}
						price={price}
						image={image}
						category={category}
					/>
				))}
		</div>
	);
};

export default CardList;
