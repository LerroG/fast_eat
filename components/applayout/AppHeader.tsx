import {
	LiaHeart,
	LiaShoppingCartSolid,
	LiaSearchSolid,
} from 'react-icons/lia';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Categories from '../Categories';

const AppHeader = () => {
	return (
		<>
			<header className='h-16 px-3 py-5 mx-auto mb-4 flex gap-2 max-w-screen-xl justify-between items-center'>
				<Link href='/'>
					<Image
						src='/logo.png'
						width={60}
						height={45}
						alt='Logo'
					/>
				</Link>
				<div className='flex gap-1 w-1/3 justify-between'>
					<Input
						type='text'
						placeholder='Поиск'
					/>
					<Button type='submit'>
						<LiaSearchSolid
							size='26'
							fill='white'
						/>
					</Button>
				</div>
				<nav className='flex gap-1'>
					<Link href='/favourite'>
						<Button variant='ghost'>
							<LiaHeart size='26' />
							Favourite
						</Button>
					</Link>
					<Link href='/cart'>
						<Button variant='ghost'>
							<LiaShoppingCartSolid size='30' />
							Cart
						</Button>
					</Link>
				</nav>
			</header>
			<Categories />
		</>
	);
};

export default AppHeader;