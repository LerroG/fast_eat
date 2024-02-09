import { FC, PropsWithChildren } from 'react';
import { IMeta } from './meta.interface';
import Head from 'next/head';

const getTitle = (title: string) => `${title} | Fast Eat`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title ? getTitle(title) : "Fats Eat"}</title>
				<meta
					name='description'
					content={description}
				/>
				<meta
					name='og:title'
					content={getTitle(title)}
				/>
				<meta
					name='description'
					content={description}
				/>
			</Head>
			{children}
		</>
	);
};

export default Meta;
