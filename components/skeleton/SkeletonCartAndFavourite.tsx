import { FC } from 'react';
import { Skeleton } from '../ui/skeleton';

type SkeletonTypeProps = {
	type: string;
};

const SkeletonCartAndFavourite: FC<SkeletonTypeProps> = ({ type }) => {
	return (
		<div className='mx-auto max-w-screen-xl h-[120px] flex justify-between items-center border px-3 my-2 rounded-md'>
			<div className='flex'>
				<Skeleton className='h-[100px] w-[100px] mr-4' />
				<div className='w-36 mr-4'>
					<Skeleton className='h-8 w-5/6 mb-2' />
					<Skeleton className='h-6 w-2/3 mb-2' />
					<Skeleton className='h-6 w-3/5' />
				</div>
				{type === 'cart' ? (
					<div className='flex items-center w-40'>
						<Skeleton className='h-10 w-2/3 mr-2' />
						<Skeleton className='h-6 w-1/3' />
					</div>
				) : (
					<></>
				)}
			</div>
			<Skeleton className='h-10 w-36 mr-2' />
		</div>
	);
};

export default SkeletonCartAndFavourite;
