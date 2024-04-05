import { ICart } from '@/types/cart';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const calcTotalPrice = (items: ICart[]) => {
	return items.reduce((sum, obj) => +obj.price * +obj.totalCount + sum, 0);
};

export const capitalize = (str: string) => {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
};

export const debounce = <F extends (...args: any[]) => any>(
	func: F,
	waitFor: number
) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const debounced = (...args: Parameters<F>) => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(() => func(...args), waitFor);
	};

	return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
