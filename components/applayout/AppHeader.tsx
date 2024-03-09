import Image from 'next/image';
import Link from 'next/link';
import Categories from './appheader/Categories';
import RightMenu from './appheader/RightMenu';
import { useRouter } from 'next/router';
import SearchInput from './appheader/SearchInput';
import MobileNav from './appheader/MobileNav';
import { capitalize } from '@/lib/utils';

const categoriesNotRenderPaths = ['/cart', '/favourite'];

const AppHeader = () => {
	const { pathname } = useRouter();

	const categoriesAndSearchNeed = categoriesNotRenderPaths.includes(pathname);

	const pathCapitalize = capitalize(pathname.slice(1))

	return (
		<>
			<header className='h-16 px-3 py-5 mx-auto mb-4 flex gap-2 max-w-screen-xl justify-between items-center'>
				{categoriesAndSearchNeed ? (
					<div className='flex justify-center w-full text-3xl font-bold'>
						Your {pathCapitalize}
					</div>
				) : (
					<></>
				)}

				<Link
					href='/'
					className='max-sm:hidden'
				>
					<Image
						src='/logo.png'
						width={60}
						height={45}
						alt='Logo'
					/>
				</Link>
				{categoriesAndSearchNeed ? <></> : <SearchInput />}

				<RightMenu />
			</header>
			{categoriesAndSearchNeed ? <></> : <Categories />}
			<MobileNav />
		</>
	);
};

export default AppHeader;
