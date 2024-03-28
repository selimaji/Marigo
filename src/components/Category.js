import React from 'react';
import Link from "next/link";
import Arrow from "@/components/Arrow";

function Category({title, href}) {
    return (
        <Link href={href}>
            <div className="mx-auto max-w-2xl p-6">
                <div className="bg-[#E9ECEF] p-3 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                        <p>{title}</p>
                        <Arrow />
                    </div>
                    <div className="flex justify-between gap-1 w-full">
                        {[1, 2, 3].map((index) => (
                            <img
                                key={index}
                                className="w-1/3 h-[140px] object-cover"
                                src={`${index * 10}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Category;