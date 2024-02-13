import CardList from '@/components/CardList';
import AppLayout from '@/components/applayout/AppLayout';
import { useGetProductsQuery } from '@/redux/productsApi';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const Home = () => {
	const filter = useSelector((state:RootState) => state.filterSlice.category)
	const {data: products = []} = useGetProductsQuery(filter)
	return (
		<AppLayout title='Home'>
				<CardList products={products} />
		</AppLayout>
	);
};

export default Home;
