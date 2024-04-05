import { FC, PropsWithChildren } from 'react';
import AppHeader from './AppHeader';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import AppFooter from './AppFooter';
import { cartApi } from '@/redux/cartApi';
import { useAppDispatch } from '@/redux/storeHooks';
import { favoriteApi } from '@/redux/favoriteApi';

const AppLayout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	const dispatch = useAppDispatch()

	dispatch(cartApi.endpoints.getCart.initiate(null))
	dispatch(favoriteApi.endpoints.getFavorite.initiate(null))

	return (
		<Meta
			title={title}
			description={description}
		>
			<div className='h-screen'>
					<AppHeader />
					<main className='h-full'>{children}</main>
			</div>
		</Meta>
	);
};

export default AppLayout;
