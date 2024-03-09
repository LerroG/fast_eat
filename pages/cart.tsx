import AppLayout from '@/components/applayout/AppLayout';
import CartList from '@/components/cart/CartList';
import NoCart from '@/components/cart/NoCart';
import { useSession } from 'next-auth/react';

const CartPage = () => {
	const { data: session } = useSession();
	return (
		<AppLayout title='Cart'>
			<div className='mx-6'>{session?.user ? <CartList /> : <NoCart />}</div>
		</AppLayout>
	);	
};

export default CartPage;
