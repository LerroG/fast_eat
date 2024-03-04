import { ICart } from '@/types/cart';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const calcTotalPrice = (items: ICart[]) => {
	return items.reduce((sum, obj) => +obj.price * +obj.totalCount + sum, 0);
};
