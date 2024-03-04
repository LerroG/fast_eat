import Image from 'next/image';
import Link from 'next/link';
import Categories from './appheader/Categories';
import RightMenu from './appheader/RightMenu';
import { useRouter } from 'next/router';
import SearchInput from './appheader/SearchInput';

const categoriesNotRenderPaths = ['/cart', '/favourite'];

const AppHeader = () => {
	const { pathname } = useRouter();

	const categoriesAndSearchNeed = categoriesNotRenderPaths.includes(pathname);

	return (
		<>
			<header className='h-16 px-3 py-5  mx-auto mb-4 flex gap-2 max-w-screen-xl justify-between items-center'>
				<Link href='/'>
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
		</>
	);
};

export default AppHeader;
