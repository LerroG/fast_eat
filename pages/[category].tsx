import CardList from '@/components/CardList';
import { CategoriesEnum } from '@/components/Categories';
import AppLayout from '@/components/applayout/AppLayout';
import { useGetProductsByCategoryQuery } from '@/redux/productsApi';
import { useParams } from 'next/navigation';

const CategoryPage = () => {
	const params: { category: CategoriesEnum } = useParams();
	const { data = [] } = useGetProductsByCategoryQuery(params?.category);

	const capitalizeTitle = (str: string) => {
		if (!str) return str;

		return str[0].toUpperCase() + str.slice(1);
	};

	const title = capitalizeTitle(params?.category);
	return (
		<AppLayout title={title}>
			<CardList products={data} />
		</AppLayout>
	);
};

export default CategoryPage;
