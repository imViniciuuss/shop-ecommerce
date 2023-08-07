import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './nav-item';

const NAV_ITEMS = [
	{
		label: 'Profile',
		href: '/',
		icon: '/images/profileIcon.png',
	},
	{
		label: 'Message',
		href: '/',
		icon: '/images/messageIcon.png',
	},
	{
		label: 'Orders',
		href: '/',
		icon: '/images/heartIcon.png',
	},
	{
		label: 'My cart',
		href: '/cartitems',
		icon: '/images/cartIcon.png',
		notification: true,
	},
];

const Header: React.FC = () => {
	return (
		<header className='shadow-2xl z-10'>
			<div className='container w-full flex flex-col  gap-2 p-4 sm:justify-between sm:flex-row'>
				<Link href='/'>
					<Image
						src='/images/logo.png'
						priority={true}
						width='150'
						height='150'
						className='w-auto h-auto'
						alt='Logo Shop'
					/>
				</Link>
				<div className='flex w-auto h-[40px]'>
					<input
						type='search'
						placeholder='Search your product'
						className='w-[100%] border-2 p-2 rounded-l-lg list-none border-[#0D6EFD] md:w-[280px] lg:w-[380px]'
					/>
					<button className='w-[70px] rounded-r-lg bg-[#0D6EFD]'>
						<span className='text-white font-medium '>Search</span>
					</button>
				</div>
				<nav className='flex gap-5 mt-5 sm:mt-0 justify-center'>
					{NAV_ITEMS.map((item) => (
						<NavItem
							{...item}
							key={item.label}
						/>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
