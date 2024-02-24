import Link from 'next/link';
import { Button } from '../ui/button';
import { LiaUserCircle } from 'react-icons/lia';

const NoCart = () => {
	return (
		<div className='flex gap-2 items-center justify-center h-1/2 mx-auto max-w-screen-xl'>
			<span className='font-semibold text-lg'>To view your cart please</span>
			<Link href='/auth'>
				<Button className='flex items-center gap-1'>
					<span>
						<LiaUserCircle size='26' />
					</span>
					<span>Sign in</span>
				</Button>
			</Link>
		</div>
	);
};

export default NoCart;
