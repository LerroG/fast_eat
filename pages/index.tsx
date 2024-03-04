import CardList from '@/components/card/CardList';
import AppLayout from '@/components/applayout/AppLayout';
import { useGetProductsQuery } from '@/redux/productsApi';
import { useAppSelector } from '@/redux/storeHooks';

const Home = () => {
	const filter = useAppSelector((state) => state.filterSlice);
	const { data: products = [] } = useGetProductsQuery(filter);
	return (
		<AppLayout title='Home'>
			<CardList products={products} />
		</AppLayout>
	);
};

export default Home;
