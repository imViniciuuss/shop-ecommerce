import { v4 as uuidv4 } from 'uuid';

export interface Item {
	id: string;
	product: string;
	image: string;
	price: number;
	desc: string;
}

export interface ItemQuantity {
	quantity: number;
}

export type CartItemQuantity = Item & ItemQuantity;

const items: Item[] = [
	{
		id: uuidv4(),
		product: 'T-Shirt',
		image: '/../public/images/Bitmap.png',
		price: 10.35,
		desc: 'T-shirts with multiple colors, for men',
	},
	{
		id: uuidv4(),
		product: 'Coat',
		image: '/../public/images/Coat.png',
		price: 10.35,
		desc: 'Coat for cold days',
	},
	{
		id: uuidv4(),
		product: 'Social Coat',
		image: '/../public/images/Blazer.png',
		price: 12.55,
		desc: 'Social shirt for events',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Wallet.png',
		product: 'Wallet',
		price: 34.55,
		desc: 'To save your humble money',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Bag.png',
		product: 'Bag',
		price: 99.95,
		desc: 'Keep your stuff in this bag',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Shorts.png',
		product: 'Shorts',
		price: 9.99,
		desc: 'Nice shorts for everyday',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Headphone.png',
		product: 'Headphone',
		price: 8.99,
		desc: 'To hear your best songs',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Bag.png',
		product: 'Bag 2023',
		price: 10.35,
		desc: 'Keep your stuff in this bag! New Version',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Bowl.png',
		product: 'Bowl',
		price: 10.35,
		desc: 'Store food or anything else',
	},
	{
		id: uuidv4(),
		image: '/../public/images/Vase.png',
		product: 'Canister',
		price: 80.95,
		desc: 'Indeed a beautiful item here',
	},
];

export default items;
