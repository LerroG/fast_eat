import { LiaHeart, LiaShoppingCartSolid, LiaUserCircle } from 'react-icons/lia';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { signOut, useSession } from 'next-auth/react';

const headerCartAndFavourites = [
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

const RightMenu: FC = () => {
	const { data: session } = useSession();

	const handleSubmit = async () => {
		await signOut({ redirect: false });
	};

	return (
		<>
			<nav className='flex gap-1'>
				{session ? (
					<Button
						onClick={handleSubmit}
						className='flex items-center gap-1'
					>
						<span>
							<LiaUserCircle size='26' />
						</span>
						<span>Sign out</span>
					</Button>
				) : (
					<Link href='/auth'>
						<Button className='flex items-center gap-1'>
							<span>
								<LiaUserCircle size='26' />
							</span>
							<span>Sign in</span>
						</Button>
					</Link>
				)}

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
