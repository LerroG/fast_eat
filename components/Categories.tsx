import { useDispatch } from 'react-redux';
import { Button } from './ui/button';
import { useGetCategoriesQuery } from '@/redux/productsApi';
import { AppDispatch } from '@/redux/store';
import { categoryChange } from '@/redux/filter/filter.slice';

const Categories = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { data = [] } = useGetCategoriesQuery('');

	return (
		<div className='flex gap-2 mx-auto max-w-screen-xl'>
			{data.map((category) => (
				<Button
					onClick={() => dispatch(categoryChange(category.name))}
					key={category.name}
				>
					{category.name}
				</Button>
			))}
		</div>
	);
};

export default Categories;
