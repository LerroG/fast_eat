import { FC, PropsWithChildren } from 'react';
import AppHeader from './AppHeader';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import AppFooter from './AppFooter';
import Categories from '@/components/Categories';

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
			<AppHeader />
			<Categories />

			{children}
			<AppFooter />
		</Meta>
	);
};

export default AppLayout;
