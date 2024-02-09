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
	console.log(products)
	// const { data = [], error, isLoading } = useGetProductsQuery('');
	// const { data = [], error, isLoading } = useGetProductsByCategoryQuery(params?.category);
	return (
		<div className='grid grid-cols-5 gap-4'>
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
