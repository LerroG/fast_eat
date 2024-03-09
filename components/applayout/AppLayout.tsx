import { FC, PropsWithChildren } from 'react';
import AppHeader from './AppHeader';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import AppFooter from './AppFooter';
import { cartApi } from '@/redux/cartApi';
import { useAppDispatch } from '@/redux/storeHooks';
import { favouriteApi } from '@/redux/favouriteApi';

const AppLayout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	const dispatch = useAppDispatch()

	dispatch(cartApi.endpoints.getCart.initiate(null))
	dispatch(favouriteApi.endpoints.getFavourite.initiate(null))

	return (
		<Meta
			title={title}
			description={description}
		>
			<div className='flex flex-col h-[101vh]'>
				<div className='flex-[1_0_auto]'>
					<AppHeader />
					<main className='h-full'>{children}</main>
				</div>
				<div className='flex-[0_0_auto]'>
					{/* <AppFooter /> */}
				</div>
			</div>
		</Meta>
	);
};

export default AppLayout;
