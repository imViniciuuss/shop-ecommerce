'use client';

import { useCart } from '@/context/cartContext';
import CartList from '../components/cartlist';

const cart: React.FC = () => {
	const { cartItems } = useCart();

	const QuantityProducts = cartItems.length;

	return (
		<section className='w-full min-h-[calc(100vh-86px)] bg-[#F7FAFC]'>
			<div className='container flex flex-col py-5 gap-5 '>
				<h1 className='text-[#1C1C1C] text-2xl font-semibold'>
					My cart ({QuantityProducts})
				</h1>
				<CartList />
			</div>
		</section>
	);
};

export default cart;
