import { Button } from '@/components/ui/button';
import { useGetCategoriesQuery } from '@/redux/productsApi';
import { categoryChange } from '@/redux/filter/filter.slice';
import { useAppDispatch, useAppSelector } from '@/redux/storeHooks';

const Categories = () => {
	const currentCategory = useAppSelector((state) => state.filterSlice.category);
	const dispatch = useAppDispatch();
	const { data = [] } = useGetCategoriesQuery('');

	return (
		<div className='flex gap-2 mx-auto mb-4 max-w-screen-xl'>
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
