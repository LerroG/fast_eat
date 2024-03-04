import AppLayout from '@/components/applayout/AppLayout';
import FavouriteList from '@/components/favourite/FavouriteList';
import NoFavourite from '@/components/favourite/NoFavourite';
import { useSession } from 'next-auth/react';

const FavouritePage = () => {
	const { data: session } = useSession();

	return (
		<AppLayout title='Favourite'>
			<div>{session?.user ? <FavouriteList /> : <NoFavourite />}</div>
		</AppLayout>
	);
};

export default FavouritePage;
