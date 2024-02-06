import { CategoriesEnum } from '@/components/Categories';
import AppLayout from '@/components/applayout/AppLayout';
import { useParams } from 'next/navigation';

const CategoryPage = () => {
	const params: { category: CategoriesEnum } = useParams();

	const capitalizeTitle = (str: string) => {
		if (!str) return str;

		return str[0].toUpperCase() + str.slice(1);
	};
	return (
		<AppLayout title={`${capitalizeTitle(params?.category)}`}>
			<div>CategoryPage</div>
		</AppLayout>
	);
};

export default CategoryPage;
