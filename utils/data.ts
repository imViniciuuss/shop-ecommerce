import { v4 as uuidv4 } from 'uuid';

export interface Item {
	id: string;
	product: string;
	image: string;
	price: number;
	desc: string;
}

const items: Item[] = [
	{
		id: uuidv4(),
		product: 'T-Shirt',
		image: '/images/Bitmap.png',
		price: 10.35,
		desc: 'T-shirts with multiple colors, for men',
	},
	{
		id: uuidv4(),
		product: 'Coat',
		image: '/images/Coat.png',
		price: 10.35,
		desc: 'Coat for cold days',
	},
	{
		id: uuidv4(),
		product: 'Social Coat',
		image: '/images/Blazer.png',
		price: 12.55,
		desc: 'Social shirt for events',
	},
	{
		id: uuidv4(),
		image: '/images/Wallet.png',
		product: 'Wallet',
		price: 34.55,
		desc: 'To save your humble money',
	},
	{
		id: uuidv4(),
		image: '/images/Bag.png',
		product: 'Bag',
		price: 99.95,
		desc: 'Keep your stuff in this bag',
	},
	{
		id: uuidv4(),
		image: '/images/Shorts.png',
		product: 'Shorts',
		price: 9.99,
		desc: 'Nice shorts for everyday',
	},
	{
		id: uuidv4(),
		image: '/images/Headphone.png',
		product: 'Headphone',
		price: 8.99,
		desc: 'To hear your best songs',
	},
	{
		id: uuidv4(),
		image: '/images/Bag.png',
		product: 'Bag 2023',
		price: 10.35,
		desc: 'Keep your stuff in this bag! New Version',
	},
	{
		id: uuidv4(),
		image: '/images/Bowl.png',
		product: 'Bowl',
		price: 10.35,
		desc: 'Store food or anything else',
	},
	{
		id: uuidv4(),
		image: '/images/Vase.png',
		product: 'Canister',
		price: 80.95,
		desc: 'Indeed a beautiful item here',
	},
];

export default items;
