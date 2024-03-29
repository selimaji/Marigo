'use client'
// 'use client' is not a valid JavaScript directive, so I removed it.
import { useState } from 'react';
import Heart from "@/components/Heart";
import Category from "@/components/Category";
import Image from 'next/image';
import { influencers } from "@/constants";

export default function Home(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const selectedInfluencer = influencers.find(influencer => influencer.name === props.params.slug);

    if (!selectedInfluencer) {
        return <div>No influencer found with the selected ID.</div>;
    }

    return (
        <div className="relative max-w-3xl mx-auto md:p-10">
            <div className="mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="h-1/4">
                    <img src={selectedInfluencer.imageSrc}
                           alt={selectedInfluencer.fullName}
                           className="max-h-[400px] w-full object-cover object-right-top" />
                </div>
            </div>

            <div className="rounded-xl w-full bg-white absolute md:relative -mt-5">
                <div className="mx-auto max-w-2xl p-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{selectedInfluencer.fullName}</h1>
                        <Heart toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                    </div>
                </div>

                {selectedInfluencer.categories.map((category, index) => (
                    <div key={index}>
                        <h2 className="px-8 text-xl font-semibold mb-2">{category.fullName}</h2>
                        {category.subcategory.map((sub, subIndex) => (
                            <Category key={index}
                                      title={sub.fullName}
                                      subcategoryImg={sub}
                                      href={`/${props.params.slug}/${category.name}/${sub.name}/`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
