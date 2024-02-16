import { LiaHeart, LiaShoppingCartSolid, LiaUserCircle } from 'react-icons/lia';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

const headerCartAndFavourites = [
	{
		name: 'Sign in',
		icon: <LiaUserCircle size='26' />,
		url: '/auth',
		variant: 'default',
	},
	{
		name: 'Favourite',
		icon: <LiaHeart size='26' />,
		url: '/favourite',
		variant: 'ghost',
	},
	{
		name: 'Cart',
		icon: <LiaShoppingCartSolid size='30' />,
		url: '/cart',
		variant: 'ghost',
	},
];

const RightMenu = () => {
	const session = useSession()
	console.log(session)
	return (
		<>
			<nav className='flex gap-1'>
				{headerCartAndFavourites.map(({ name, icon, url, variant }) => (
					<Link
						href={url}
						key={url}
					>
						<Button
							variant={variant}
							className='flex items-center gap-1'
						>
							<span>{icon}</span>
							<span>{name}</span>
						</Button>
					</Link>
				))}
			</nav>
		</>
	);
};

export default RightMenu;
