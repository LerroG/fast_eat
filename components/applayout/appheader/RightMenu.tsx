import { LiaHeart, LiaShoppingCartSolid, LiaUserCircle } from 'react-icons/lia';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { signOut, useSession } from 'next-auth/react';

type buttonsType = {
	name: string;
	icon: JSX.Element;
	url: string;
	variant:
		| 'ghost'
		| 'link'
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| null
		| undefined;
};

const headerCartAndFavorites: buttonsType[] = [
	{
		name: 'Favorite',
		icon: <LiaHeart size='26' />,
		url: '/favorite',
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
		await signOut();
	};

	return (
		<>
			<nav className='flex gap-1 max-sm:hidden'>
				{session ? (
					<Button
						onClick={handleSubmit}
						className='flex items-center gap-1'
					>
						<span>
							<LiaUserCircle size='26' />
						</span>
						<span className='max-md:hidden'>Sign out</span>
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

				{headerCartAndFavorites.map(({ name, icon, url, variant }) => (
					<Link
						href={url}
						key={url}
					>
						<Button
							variant={variant}
							className='flex items-center gap-1'
						>
							<span>{icon}</span>
							<span className='max-md:hidden'>{name}</span>
						</Button>
					</Link>
				))}
			</nav>
		</>
	);
};

export default RightMenu;
