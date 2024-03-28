'use client'
import {useState} from 'react'
import Link from 'next/link'

export default function Home() {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="relative bg-[#E9ECEF] h-full">
            <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div className="h-1/4">
                    <img
                        src={'sara.svg'}
                        alt={'sara'}
                        className="max-h-[400px] w-full object-cover object-right-top"
                    />
                </div>
            </div>

            <div className={'rounded-xl w-full bg-[#E9ECEF] absolute -mt-10 h-5/4'}>
                <div className="mx-auto max-w-2xl p-8">
                    <div
                        className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 flex items-center justify-between">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Sara Hoxha</h1>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={toggleFavorite}
                            style={{cursor: "pointer"}}
                            stroke={isFavorite ? "#AF63FF" : "gray"}
                            strokeWidth={2}
                        >
                            <path
                                d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                                fill={isFavorite ? "#AF63FF" : "gray"} fillRule="evenodd"
                                clipRule="evenodd"></path>
                        </svg>

                    </div>
                </div>
                <Link href="/influencer/category">
                    <div className={"mx-auto max-w-2xl pt-3 p-8"}>
                        <div className="flex items-center justify-between mb-2">
                            <p>Preloved items</p>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10.6445 7.6678C10.6881 7.71134 10.7227 7.76307 10.7464 7.82002C10.77 7.87697 10.7822 7.93802 10.7822 7.99968C10.7822 8.06133 10.77 8.12238 10.7464 8.17933C10.7227 8.23628 10.6881 8.28801 10.6445 8.33155L5.01945 13.9566C4.93143 14.0446 4.81206 14.094 4.68758 14.094C4.5631 14.094 4.44372 14.0446 4.3557 13.9566C4.26768 13.8685 4.21824 13.7492 4.21824 13.6247C4.21824 13.5002 4.26768 13.3808 4.3557 13.2928L9.64977 7.99968L4.3557 2.70655C4.26768 2.61853 4.21824 2.49915 4.21824 2.37468C4.21824 2.2502 4.26768 2.13082 4.3557 2.0428C4.44372 1.95478 4.5631 1.90533 4.68758 1.90533C4.81206 1.90533 4.93143 1.95478 5.01945 2.0428L10.6445 7.6678Z"
                                      fill="#212529"/>
                            </svg>
                        </div>
                        <div className="flex justify-between  gap-2 ">
                            <img
                                className=" w-1/3 h-[140px] object-cover"
                                src="rectangle-620.png"
                            />
                            <img
                                className=" w-1/3 h-[140px] object-cover"
                                src="rectangle-630.png"
                            />
                            <img
                                className="w-1/3 h-[140px] object-cover"
                                src="rectangle-640.png"
                            />
                        </div>
                    </div>
                </Link>
                <Link href="/influencer/category">
                    <div className={"mx-auto max-w-2xl p-8"}>
                        <div className="flex items-center justify-between mb-2">
                            <p>Self cltv</p>
                            <svg width="15" height="15" viewBox="0 0 15 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10.6445 7.6678C10.6881 7.71134 10.7227 7.76307 10.7464 7.82002C10.77 7.87697 10.7822 7.93802 10.7822 7.99968C10.7822 8.06133 10.77 8.12238 10.7464 8.17933C10.7227 8.23628 10.6881 8.28801 10.6445 8.33155L5.01945 13.9566C4.93143 14.0446 4.81206 14.094 4.68758 14.094C4.5631 14.094 4.44372 14.0446 4.3557 13.9566C4.26768 13.8685 4.21824 13.7492 4.21824 13.6247C4.21824 13.5002 4.26768 13.3808 4.3557 13.2928L9.64977 7.99968L4.3557 2.70655C4.26768 2.61853 4.21824 2.49915 4.21824 2.37468C4.21824 2.2502 4.26768 2.13082 4.3557 2.0428C4.44372 1.95478 4.5631 1.90533 4.68758 1.90533C4.81206 1.90533 4.93143 1.95478 5.01945 2.0428L10.6445 7.6678Z"
                                      fill="#212529"/>
                            </svg>
                        </div>
                        <div className="flex justify-between  gap-2 ">

                            <img
                                className=" w-1/3 h-[140px] object-cover"
                                src="rectangle-620.png"
                            />
                            <img
                                className=" w-1/3 h-[140px] object-cover"
                                src="rectangle-630.png"
                            />
                            <img
                                className="w-1/3 h-[140px] object-cover"
                                src="rectangle-640.png"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
