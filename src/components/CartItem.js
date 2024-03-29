import React, {useState} from 'react';
import RemoveItem from "@/components/RemoveItem";

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
        <div className="justify-between rounded-lg bg-white shadow-md sm:flex sm:justify-start w-1/3 ">
            <img src={imageSrc} alt="product-image" className="w-1/2 rounded-lg sm:w-40" />
            <div className="bg-red-100 flex flex-col w-full items-center justify-end">
                <div className="bg-green-100 w-full h-1/2 flex flex-col items-end px-10">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-700">Size: {size}</p>
                </div>

                <div className="w-full h-1/2">
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


export default CartItem;