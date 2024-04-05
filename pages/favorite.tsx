import AppLayout from '@/components/applayout/AppLayout';
import FavoriteList from '@/components/favorite/FavoriteList';
import NoFavorite from '@/components/favorite/NoFavorite';
import { useSession } from 'next-auth/react';

const FavoritePage = () => {
	const { data: session } = useSession();

	return (
		<AppLayout title='Favorite'>
			<div>{session?.user ? <FavoriteList /> : <NoFavorite />}</div>
		</AppLayout>
	);
};

export default FavoritePage;
