import CardList from '@/components/CardList';
import AppLayout from '@/components/applayout/AppLayout';
import { useGetProductsQuery } from '@/redux/productsApi';

const Home = () => {
	const {data = []} = useGetProductsQuery('')
	return (
		<AppLayout title='Home'>
			<div className='mx-auto max-w-screen-xl'>
				<CardList products={data} />
			</div>
		</AppLayout>
	);
};

export default Home;
