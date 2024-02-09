import CardList from '@/components/CardList';
import { CategoriesEnum } from '@/components/Categories';
import AppLayout from '@/components/applayout/AppLayout';
import { useGetProductsQuery } from '@/redux/productsApi';
import { useParams, usePathname, useRouter } from 'next/navigation';

const Home = () => {
	const {data = []} = useGetProductsQuery('')
	return (
		<AppLayout title='Home'>
				<CardList products={data} />
		</AppLayout>
	);
};

export default Home;
