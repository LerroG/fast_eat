import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from './ui/button';
import { useGetCategoriesQuery } from '@/redux/productsApi';
import { AppDispatch, RootState } from '@/redux/store';
import { categoryChange } from '@/redux/filter/filter.slice';

const Categories = () => {
	const currentCategory = useSelector(
		(state: RootState) => state.filterSlice.category
	);
	const dispatch = useDispatch<AppDispatch>();
	const { data = [] } = useGetCategoriesQuery('');

	return (
		<div className='flex gap-2 mx-auto max-w-screen-xl'>
			{data.map((category) => (
				<Button
					onClick={() => {
						dispatch(categoryChange(category.name));
					}}
					key={category.name}
					className={
						currentCategory === category.name
							? 'bg-orange-500 hover:bg-orange-500'
							: ''
					}
				>
					{category.name}
				</Button>
			))}
		</div>
	);
};

export default Categories;
