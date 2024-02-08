import { useGetProductsQuery } from '@/redux/productsApi';
import CardItem from './CardItem';
import { IProduct } from './types/product';

const cardslist: IProduct[] = [
	{
		id: '1',
		title: 'Title 1',
		price: 100,
		image: 'image url 1',
		category: 'Burgers',
	},
	{
		id: '2',
		title: 'Title 2',
		price: 200,
		image: 'image url 2',
		category: 'Burgers',
	},
	{
		id: '3',
		title: 'Title 3',
		price: 300,
		image: 'image url 3',
		category: 'Pizza',
	},
	{
		id: '4',
		title: 'Title 4',
		price: 400,
		image: 'image url 4',
		category: 'Pizza',
	},
	{
		id: '5',
		title: 'Title 5',
		price: 500,
		image: 'image url 5',
		category: 'Drinks',
	},
	{
		id: '6',
		title: 'Title 6',
		price: 600,
		image: 'image url 6',
		category: 'Drinks',
	},
	{
		id: '7',
		title: 'Title 7',
		price: 700,
		image: 'image url 7',
		category: 'Salads',
	},
	{
		id: '8',
		title: 'Title 8',
		price: 800,
		image: 'image url 8',
		category: 'Salads',
	},
];

const CardList = () => {
	const { data, error, isLoading } = useGetProductsQuery();
	return (
		<div className='grid grid-cols-5 gap-4'>
			{data && data.map(({ id, title, price, image, category }) => (
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
