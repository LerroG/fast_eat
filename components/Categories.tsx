import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

export enum CategoriesEnum {
	All = 'All',
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
	{ name: CategoriesEnum.All, url: '/' },
	{ name: CategoriesEnum.Burgers, url: '/burgers' },
	{ name: CategoriesEnum.Pizza, url: '/pizza' },
	{ name: CategoriesEnum.Drinks, url: '/drinks' },
	{ name: CategoriesEnum.Salads, url: '/salads' },
];

const Categories = () => {
	const path = usePathname();

	return (
		<div className='flex gap-2 mx-auto max-w-screen-xl'>
			{categories.map((category) => (
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
