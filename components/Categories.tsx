import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { useGetCategoriesQuery } from '@/redux/productsApi';

const Categories = () => {
	const {data = []} = useGetCategoriesQuery('')
	const path = usePathname();

	return (
		<div className='flex gap-2 mx-auto max-w-screen-xl'>
			{data.map((category) => (
				<Link
					href={category.url}
					key={category.url}
				>
					<Button className={path === category.url ? 'bg-orange-500' : ''}>
						{category.name}
					</Button>
				</Link>
			))}
		</div>
	);
};

export default Categories;
