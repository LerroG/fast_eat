import CardList from '@/components/CardList';
import Categories from '@/components/Categories';
import AppLayout from '@/components/applayout/AppLayout';

const Home = () => {
	return (
		<AppLayout title='Home'>
			<div className='mx-auto max-w-screen-xl'>
				<Categories />
				<CardList />
			</div>
		</AppLayout>
	);
};

export default Home;
