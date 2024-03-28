'use client'
import {useState} from 'react'
import Heart from "@/components/Heart";
import Category from "@/components/Category";
import Image from 'next/image'

export default function Home() {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="relative  max-w-3xl mx-auto md:p-10">
            <div className="mx-auto  sm:px-6  lg:max-w-7xl  lg:px-8">
                <div className="h-1/4">
                     <Image src={`/sara1.svg`}
                            alt={'sara1'}
                            width="100" height="100"
                            className="max-h-[400px] w-full object-cover object-right-top" />
                </div>
            </div>

            <div className={'rounded-xl w-full bg-white absolute md:relative -mt-5'}>
                <div className={"mx-auto max-w-2xl p-8"}>
                    <div
                        className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Self cltv</h1>
                        <Heart toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                    </div>
                </div>

                <Category title="Pants" href={"/influencer/category/products"}/>
                <Category title="Blazzers" href={"/influencer/category/products"}/>
                <Category title="Skirts" href={"/influencer/category/products"}/>
            </div>
        </div>
    )
}
