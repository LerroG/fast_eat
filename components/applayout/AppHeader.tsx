import {
	LiaHeart,
	LiaShoppingCartSolid,
	LiaSearchSolid,
} from 'react-icons/lia';
import Image from 'next/image';
import Link from 'next/link';

const AppHeader = () => {
	return (
		<>
			<header className='h-16 px-3 py-5 mx-auto flex gap-2 max-w-screen-xl justify-between items-center'>
				<Link href='/'>
					<Image
						src='/logo.png'
						width={60}
						height={45}
						alt='Logo'
					/>
				</Link>
				<div className='flex gap-1 w-1/3 justify-between'>
					<input
						type='text'
						placeholder='Поиск'
						className='px-2 py-1 w-full rounded-md border-solid border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent'
					/>
					<button className='bg-orange-400 hover:bg-orange-300 rounded px-4 py-1'>
						<LiaSearchSolid
							size='26'
							fill='white'
						/>
					</button>
				</div>
				<nav className='flex gap-1'>
					<Link
						href='/favourite'
						className='flex items-center gap-1 hover:bg-orange-300 hover:text-white hover:cursor-pointer rounded px-3 py-1'
					>
						<LiaHeart size='26' />
						<span className='flex items-center text-lg'>Favourite</span>
					</Link>
					<Link
						href='/cart'
						className='flex items-center gap-1 hover:bg-orange-300 hover:text-white hover:cursor-pointer rounded px-3 py-1'
					>
						<LiaShoppingCartSolid size='32' />
						<span className='flex items-center text-lg'>Cart</span>
					</Link>
				</nav>
			</header>
		</>
	);
};

export default AppHeader;
