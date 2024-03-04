import { LiaSearchSolid, LiaTimesSolid } from 'react-icons/lia';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/redux/storeHooks';
import { useCallback, useRef, useState } from 'react';
import { searchInput } from '@/redux/filter/filter.slice';
import { debounce } from '@/lib/utils';

const SearchInput = () => {
	const [searchValue, setSearchValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();

	const handleClickClear = () => {
		dispatch(searchInput(''));
		setSearchValue('');
		inputRef.current?.focus();
	};

	const updateSearchValue = useCallback(
		debounce((str: string) => {
			dispatch(searchInput(str));
		}, 500),
		[]
	);

	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	const handleSearchClick = () => {
		dispatch(searchInput(searchValue));
	};

	return (
		<div className='flex relative items-center gap-1 w-1/3 justify-between'>
			<Input
				ref={inputRef}
				value={searchValue}
				type='text'
				placeholder='Seacrh'
				onChange={handleChangeInput}
			/>
			{searchValue && (
				<div
					onClick={handleClickClear}
					className='absolute right-[68px] cursor-pointer opacity-30 hover:opacity-80'
				>
					<LiaTimesSolid size='24' />
				</div>
			)}

			<Button
				onClick={handleSearchClick}
				type='submit'
			>
				<LiaSearchSolid
					size='26'
					fill='white'
				/>
			</Button>
		</div>
	);
};

export default SearchInput;
