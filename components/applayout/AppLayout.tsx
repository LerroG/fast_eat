import { FC, PropsWithChildren } from 'react';
import AppHeader from './AppHeader';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import AppFooter from './AppFooter';

const AppLayout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<Meta
			title={title}
			description={description}
		>
			<div className='flex flex-col h-screen'>
				<div className='flex-[1_0_auto]'>
					<AppHeader />
					<main className='h-full'>{children}</main>
				</div>
				<div className='flex-[0_0_auto]'>
					<AppFooter />
				</div>
			</div>
		</Meta>
	);
};

export default AppLayout;
