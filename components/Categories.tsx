import Link from 'next/link';
import { Button } from './ui/button';

export enum CategoriesEnum {
	Burgers = 'Burgers',
	Pizza = 'Pizza',
	Drinks = 'Drinks',
	Salads = 'Salads',
}

type typeCategory = {
	name: CategoriesEnum;
	url: string;
};

const categories: typeCategory[] = [
	{ name: CategoriesEnum.Burgers, url: '/burgers' },
	{ name: CategoriesEnum.Pizza, url: '/pizza' },
	{ name: CategoriesEnum.Drinks, url: '/drinks' },
	{ name: CategoriesEnum.Salads, url: '/salads' },
];

const Categories = () => {
	return (
		<div className='flex gap-2 mb-4'>
			{categories.map((category) => (
				<Link
					href={category.url}
					key={category.url}
				>
					<Button>{category.name}</Button>
				</Link>
			))}
		</div>
	);
};

export default Categories;
