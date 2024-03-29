import React from 'react';
import Link from "next/link";
import Arrow from "@/components/Arrow";

function Category({title, href,subcategoryImg}) {
    return (
        <Link href={href}>
            <div className="mx-auto max-w-2xl p-6">
                <div className="bg-[#E9ECEF] p-3 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                        <p className={'capitalize'}>{title}</p>
                        <Arrow />
                    </div>
                    <div className="flex justify-between gap-1 w-full">
                        {subcategoryImg.map((img, index) => (
                            <img
                                key={index}
                                className="w-1/3 h-[140px] object-cover"
                                src={`/${img}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Category;