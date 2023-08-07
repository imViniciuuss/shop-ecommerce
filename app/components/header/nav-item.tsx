'use client';

import { useCart } from '@/context/cartContext';
import Image from 'next/image';
import Link from 'next/link';

type NavItemProps = {
	label: string;
	href: string;
	icon: string;
	notification?: boolean;
};

export const NavItem = ({ label, href, icon, notification }: NavItemProps) => {
	const { cartItems } = useCart();

	const getTotalItems = () => {
		return cartItems.reduce((total) => total + 1, 0);
	};
	return (
		<Link href={href}>
			<div className='flex flex-col items-center h-full justify-center gap-[7px] relative'>
				<Image
					priority
					src={icon}
					width='10'
					height='10'
					className='w-auto'
					alt='Icon Navigation'
				/>
				<span className='text-[#0D6EFD] text-[12px]'>{label}</span>
				{notification && (
					<div className='flex items-center justify-center absolute top-0 right-0 w-4 h-4 rounded-full bg-orange-500'>
						<span className='text-white font-medium text-[10px]'>
							{getTotalItems()}
						</span>
					</div>
				)}
			</div>
		</Link>
	);
};

