'use client'
import React, { useState } from 'react';
import {Button} from "@/components/ui/button";

// Item component
function CartItem({ id, imageSrc, title, size, price, removeFromCart, updateQuantity }) {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateQuantity(id, quantity - 1);
        }
    };

    const increment = () => {
        setQuantity(quantity + 1);
        updateQuantity(id, quantity + 1);
    };

    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={imageSrc} alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                    <p className="mt-1 text-xs text-gray-700">{size}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={decrement}> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={quantity} readOnly />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={increment}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">{price}</p>
                        <RemoveItem removeFromCart={() => removeFromCart(id)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Remove item component
function RemoveItem({ removeFromCart }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={removeFromCart}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

// Main page component
function Page(props) {
    const [cartItems, setCartItems] = useState([
        { id: 1, imageSrc: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Nike Air Max 2019", size: "36EU - 4US", price: "259.000 L", quantity: 1 },
        { id: 2, imageSrc: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80", title: "Nike Air Max 2019", size: "36EU - 4US", price: "259.000 L", quantity: 1 }
    ]);

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
    const shipping = 4.99;
    const total = subtotal + shipping;

    return (
        <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="flex flex-col">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    ))}
                </div>

                {/* Total component */}
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">{subtotal.toFixed(2)} L</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">{shipping.toFixed(2)} L</p>
                    </div>
                    <hr className="my-4"/>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{total.toFixed(2)} L</p>
                        </div>
                    </div>
                    <Button className="mt-6 w-full rounded-md bg-[#212529] py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        Check out
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Page;
