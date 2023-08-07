'use client';

import Image from 'next/image';
import items, { Item } from '@/utils/data';
import { useCart } from '@/context/cartContext';
import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const HeroSection: React.FC = () => {
	const [toastOpen, setToastOpen] = useState(false);
	const { addToCart } = useCart();

	function handleAddToCart(item: Item) {
		addToCart(item);
		setToastOpen(true);
		console.log('Produto adicionado');
	}

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setToastOpen(false);
	};

	return (
		<section className='w-full min-h-[calc(100vh-86px)] bg-[#F7FAFC]'>
			<div className='container py-10'>
				<h1 className='text-2xl font-semibold text-[#1C1C1C]'>
					Recommended items
				</h1>
				<div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
					{items.map((item) => (
						<article
							key={item.id}
							className='flex flex-col justify-between bg-white border rounded-md p-[10px] border-[#E0E0E0] w-full h-auto'>
							<div className='wfull py-[15px] px-6 flex justify-center items-center'>
								<Image
									src={item.image}
									width='100'
									height='100'
									className='w-auto'
									alt='Imagem'
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<div className='h-24'>
									<h1 className='text-lg text-[#1C1C1C] font-bold'>
										{item.product}
									</h1>
									<span className='#1C1C1C font-medium'>${item.price}</span>
									<p className='text-[#8B96A5]'>{item.desc}</p>
								</div>
								<button
									onClick={() => handleAddToCart(item)}
									className='bg-[#0D6EFD] text-white font-medium'>
									Add to cart
								</button>
								<Snackbar
									open={toastOpen}
									autoHideDuration={1200}
									onClose={handleClose}>
									<Alert
										onClose={handleClose}
										severity='success'
										sx={{ width: '100%' }}>
										Item added to cart
									</Alert>
								</Snackbar>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
