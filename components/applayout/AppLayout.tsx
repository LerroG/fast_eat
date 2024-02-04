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
			<AppHeader />
			{children}
			<AppFooter />
		</Meta>
	);
};

export default AppLayout;
