import CardList from '@/components/CardList';
import AppLayout from '@/components/applayout/AppLayout';
import { useGetProductsQuery } from '@/redux/productsApi';

const Home = () => {
	const {data = []} = useGetProductsQuery('')
	return (
		<AppLayout title='Home'>
				<CardList products={data} />
		</AppLayout>
	);
};

export default Home;
