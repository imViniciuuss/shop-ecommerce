import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useCart } from '@/context/cartContext';
import { Item } from '@/utils/data';
import { Snackbar, Alert } from '@mui/material';

const CartList: React.FC = () => {
	const { cartItems, removeFromCart } = useCart();
	const [toastOpen, setToastOpen] = useState(false);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setToastOpen(false);
	};

	function removeFromCartItem(item: Item) {
		setToastOpen(true);
		removeFromCart(item);
	}

	return (
		<>
			{cartItems.length === 0 ? (
				<div className='flex flex-col gap-3'>
					<span className='text-sm font-medium'>
						Your shopping cart is empty 😕
					</span>
					<div>
						<Link href='/'>
							<button className='w-48 h-12 bg-[#0D6EFD] hover:bg-[#5a9cff] transition border-2 border-[#5a9cff] shadow-lg rounded-m text-lg font-bold text-white'>
								Go to shop!
							</button>
						</Link>
					</div>
				</div>
			) : (
				<div className='bg-white h-auto border rounded-lg border-[#E0E0E0] flex flex-col p-5'>
					{cartItems.map((item, index) => (
						<div
							key={index}
							className='flex w-full justify-between h-32 border-b mb-5 '>
							<div className='flex gap-2 w-full '>
								<div className='border rounded-lg w-20 h-20 border-[#E0E0E0] p-1'>
									<Image
										src={item.image}
										width='80'
										height='80'
										className='w-auto'
										priority
										alt='Cart Image'
									/>
								</div>
								<div className='flex flex-col gap-1  w-full'>
									<div className='flex justify-between'>
										<p className='text-[#1C1C1C] font-medium'>{item.product}</p>
										<span className='text-xl font-medium  text-[#1C1C1C]'>
											${item.price}
										</span>
									</div>
									<span className='text-[#8B96A5]'>{item.desc}</span>
									<div className='flex items-center gap-2'>
										<button
											onClick={() => removeFromCartItem(item)}
											className='px-2 h-[30px] transition hover hover:bg-[#DEE2E7] border border-[#DEE2E7] rounded-md'>
											<span className='text-[#FA3434] font-medium text-sm'>
												Remove
											</span>
										</button>
										<button className='w-auto px-2 h-[30px] transition hover hover:bg-[#DEE2E7] border border-[#DEE2E7] rounded-md'>
											<span className='text-[#0D6EFD] font-medium text-sm'>
												Save for later
											</span>
										</button>
										<Snackbar
											open={toastOpen}
											autoHideDuration={1200}
											onClose={handleClose}>
											<Alert
												onClose={handleClose}
												severity='error'
												sx={{ width: '100%' }}>
												Item removed from cart
											</Alert>
										</Snackbar>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default CartList;
