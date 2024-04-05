import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categoryChange } from '@/redux/filter/filter.slice';
import { useAppDispatch, useAppSelector } from '@/redux/storeHooks';
import { ICategory } from '@/types/categories';
import { FC } from 'react';

type CategoriesDropdownType = {
	categories: ICategory[];
};

const CategoriesDropdown: FC<CategoriesDropdownType> = ({ categories }) => {
	const currentCategory = useAppSelector((state) => state.filterSlice.category);
	const dispatch = useAppDispatch();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className='min-w-32'
					variant='outline'
				>
					Category: {currentCategory}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
					{categories.map((item) => (
						<DropdownMenuItem
							onClick={() => dispatch(categoryChange(item.name))}
							key={item.name}
						>
							<span>{item.name}</span>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default CategoriesDropdown;
