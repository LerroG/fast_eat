import AppLayout from '@/components/applayout/AppLayout';
import CartList from '@/components/cart/CartList';
import NoCart from '@/components/cart/NoCart';
import { useGetCartQuery } from '@/redux/cartApi';
import { useSession } from 'next-auth/react';

const CartPage = () => {
	const { data: session } = useSession();
	const { data: cart = [] } = useGetCartQuery('');
	return (
		<AppLayout title='Cart'>
			<div>{session?.user ? <CartList cart={cart} /> : <NoCart />}</div>
		</AppLayout>
	);	
};

export default CartPage;
