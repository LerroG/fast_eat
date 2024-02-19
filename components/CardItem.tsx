import Image from 'next/image';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IProduct } from '../types/product';
import { FC } from 'react';
import { Button } from './ui/button';

const CardItem: FC<IProduct> = ({ id, title, price, image }) => {
	return (
		<Card className='hover:cursor-pointer h-[350px]'>
			<CardContent className='h-2/3'>
				<div>
					<Image
						src={`${image}`}
						width={200}
						height={200}
						alt='Picture of the author'
					/>
				</div>
			</CardContent>
			<CardFooter className='flex-col h-1/3'>
				<div className='flex justify-center w-full h-1/2'>
					<span className='font-bold'>{title}</span>
				</div>
				<div className='flex items-center justify-between w-full h-1/2'>
					<span className='font-medium'>{price} сум</span>
					<Button size='sm'>
						<LiaCartPlusSolid size='24' />
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};

export default CardItem;
