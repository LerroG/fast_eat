import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IProduct } from './types/product';
import { FC } from 'react';

const CardItem: FC<IProduct> = ({ id, title, price, image }) => {
	return (
		<Card>
			<CardContent>
				<div>{image}</div>
			</CardContent>
			<CardFooter>
				<span>{title}</span>
				<span>{price}</span>
			</CardFooter>
		</Card>
	);
};

export default CardItem;
