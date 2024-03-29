'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { influencers } from "@/constants";
import CartItem from "@/components/CartItem";


const getProductBasedOnId = influencers.flatMap(influencer =>
    influencer.categories.flatMap(category =>
        category.subcategory.flatMap(subcategory =>
            subcategory.products.filter(product => product.id === 1)
        )
    )
);

function Page(props) {
    const [cartItems, setCartItems] = useState([
        {
            id: getProductBasedOnId[0].id,
            imageSrc: `/${getProductBasedOnId[0].img}`,
            title: getProductBasedOnId[0].name,
            size: "M",
            price: `${getProductBasedOnId[0].price} L`,
            quantity: 1
        },
    ]);
    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
    const shipping = 4.99;
    const total = subtotal + shipping;

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };


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
                    <hr className="my-4" />
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
