'use client'
import React, {useState} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";


const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee 2',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '123',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee 3',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee 4',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '2',
        color: 'Black',
    },
]

export default function Products() {
    const [columns, setColumns] = useState(2);

    const handleButtonClick = (col) => {
        setColumns(col);
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 items-center">Self cltv</h2>

                <div className="flex items-center justify-between">
                    <Breadcrumb>
                        <BreadcrumbList className="gap-0.5">
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/components">Components</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>


                    <div className="flex gap-2 sm:hidden">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                 onClick={() => handleButtonClick(1)}
                                 className={'cursor-pointer'}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.0625 0H0.9375C0.419733 0 0 0.419733 0 0.9375V14.0625C0 14.5803 0.419733 15 0.9375 15H14.0625C14.5803 15 15 14.5803 15 14.0625V0.9375C15 0.419733 14.5803 0 14.0625 0Z"
                                    fill="#E9ECEF"/>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                 onClick={() => handleButtonClick(2)}
                                 className={'cursor-pointer'}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5625 0H0V6.5625H6.5625V0Z" fill="#6C757D"/>
                                <path d="M6.5625 8.4375H0V15H6.5625V8.4375Z" fill="#6C757D"/>
                                <path d="M15 0H8.4375V6.5625H15V0Z" fill="#6C757D"/>
                                <path d="M15 8.4375H8.4375V15H15V8.4375Z" fill="#6C757D"/>
                            </svg>
                    </div>

                </div>


                <div
                    className={`mt-6 grid grid-cols-${columns} gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8`}>
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
