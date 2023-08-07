'use client';

import React, { createContext, useContext, useState } from 'react';
import items, { Item } from '@/utils/data';

interface CartContextValue {
	cartItems: Item[];
	addToCart: (item: Item) => void;
	removeFromCart: (item: Item) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cartItems, setCartItems] = useState<Item[]>([]);

	const addToCart = (item: Item) => {
		setCartItems((prevItems) => [...prevItems, item]);
	};

	const removeFromCart = (item: Item) => {
		setCartItems((prevItems) => {
			const index = prevItems.findIndex((cartItem) => cartItem.id === item.id);
			if (index !== -1) {
				const updatedCart = [...prevItems];
				updatedCart.splice(index, 1);
				return updatedCart;
			}
			return prevItems;
		});
	};

	const contextValue: CartContextValue = {
		cartItems,
		addToCart,
		removeFromCart,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};
