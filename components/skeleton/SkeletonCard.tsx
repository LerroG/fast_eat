import { FC } from 'react';
import { Skeleton } from '../ui/skeleton';

const SceletonCard: FC = () => {
	return (
		<div className='h-[350px] border rounded-xl shadow-sm p-6'>
			<Skeleton className='h-2/3' />
			<div className='flex-col h-1/3'>
				<div className='w-full mt-2 h-1/2'>
					<Skeleton className='h-1/2' />
				</div>
				<div className='flex justify-between -mt-1.5 items-center w-full h-1/2'>
					<Skeleton className='w-1/2 h-1/2' />
					<Skeleton className='w-1/4 h-9' />
				</div>
			</div>
		</div>
	);
};

export default SceletonCard;
