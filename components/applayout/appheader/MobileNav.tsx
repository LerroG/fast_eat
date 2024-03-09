import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import {
	LiaHomeSolid,
	LiaHeart,
	LiaShoppingCartSolid,
	LiaUserCircle,
} from 'react-icons/lia';

const menu = [
	{
		url: '/',
		name: 'Home',
		icon: <LiaHomeSolid size='26' />,
	},
	{
		url: '/favourite',
		name: 'Favourite',
		icon: <LiaHeart size='26' />,
	},
	{
		url: '/cart',
		name: 'Cart',
		icon: <LiaShoppingCartSolid size='28' />,
	},
];

const MobileNav = () => {
	const { data: session } = useSession();

	const handleSubmit = async () => {
		await signOut({ redirect: false });
	};

	return (
		<>
			<ul className='flex justify-between h-14 py-1 w-full sm:hidden bg-white fixed z-10 bottom-0 border-t-2'>
				{menu.map((item) => (
					<li className='flex-col w-1/4 h-full'>
						<Link href={item.url}>
							<div className='flex justify-center'>{item.icon}</div>
							<div className='flex justify-center'>{item.name}</div>
						</Link>
					</li>
				))}
				<li className='flex-col w-1/4 h-full'>
					{session ? (
						<div onClick={handleSubmit}>
							<div className='flex justify-center'>
								<LiaUserCircle size='28' />
							</div>
							<div className='flex justify-center'>Sign out</div>
						</div>
					) : (
						<Link href='/auth'>
							<div className='flex justify-center'>
								<LiaUserCircle size='28' />
							</div>
							<div className='flex justify-center'>Sign in</div>
						</Link>
					)}
				</li>
			</ul>
		</>
	);
};

export default MobileNav;
