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
import {cn} from "@/lib/utils";


const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '/influencer/category/products/single-product',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee 2',
        href: '/influencer/category/products/single-product',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '123',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee 3',
        href: '/influencer/category/products/single-product',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee 4',
        href: '/influencer/category/products/single-product',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '2',
        color: 'Black',
    },
]

export default function Products(props) {
    const [columns, setColumns] = useState(2);

    const handleButtonClick = (col) => {
        setColumns(col);
    };


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 items-center capitalize">{props.params.products}</h2>
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                            fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="flex items-center justify-between">
                    <Breadcrumb>
                        <BreadcrumbList className="gap-0.5">
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link className={'capitalize'} href={`/${props.params.slug}/${props.params.category}`}>{props.params.category.replace('-', ' ')}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                            <BreadcrumbLink>
                                    <Link className={'capitalize'} href={`/${props.params.slug}/${props.params.category}/${props.params.products}`}>{props.params.products.replace('-', ' ')}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex gap-4 sm:hidden">
                        <button onClick={() => handleButtonClick(1)}>
                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                 className={'cursor-pointer'}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.0625 0H0.9375C0.419733 0 0 0.419733 0 0.9375V14.0625C0 14.5803 0.419733 15 0.9375 15H14.0625C14.5803 15 15 14.5803 15 14.0625V0.9375C15 0.419733 14.5803 0 14.0625 0Z"
                                    fill="#E9ECEF"/>
                            </svg>
                        </button>

                        <button onClick={() => handleButtonClick(2)}>
                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                 className={'cursor-pointer'}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5625 0H0V6.5625H6.5625V0Z" fill="#6C757D"/>
                                <path d="M6.5625 8.4375H0V15H6.5625V8.4375Z" fill="#6C757D"/>
                                <path d="M15 0H8.4375V6.5625H15V0Z" fill="#6C757D"/>
                                <path d="M15 8.4375H8.4375V15H15V8.4375Z" fill="#6C757D"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={cn(`mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8`, {
                    'grid-cols-1': columns === 1,
                    'grid-cols-2': columns === 2,
                })}>
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
                                        <Link href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </Link>
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
