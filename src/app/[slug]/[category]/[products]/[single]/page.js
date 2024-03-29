'use client'
import { useEffect, useState } from 'react';
import { CarouselItem, CarouselNext, CarouselPrevious, CarouselContent, Carousel } from '@/components/ui/carousel';
import { HeartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { influencers } from "@/constants";

export default function Page(props) {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [counter, setCounter] = useState(1);
    const [size, setSize] = useState('M');
    const [color, setColor] = useState('Gray');
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (!api) return;

        const scrollSnapList = api.scrollSnapList();
        setCounter(scrollSnapList.length);
        setCurrent(api.selectedScrollSnap() + 1);

        const handleSelect = () => setCurrent(api.selectedScrollSnap() + 1);
        api.on('select', handleSelect);

        return () => api.off('select', handleSelect);
    }, [api]);

    useEffect(() => {
        const filteredProducts = filterProducts();
        setTotalPrice(filteredProducts[0]?.price * counter);
    }, [counter]);


    const filterProducts = () => {
        let filteredProducts = [];
        influencers.forEach(influencer => {
            if (influencer.name === props.params.slug) {
                influencer.categories.forEach(category => {
                    if (category.name === props.params.category) {
                        category.subcategory.forEach(subcategory => {
                            if (subcategory.name === props.params.products) {
                                filteredProducts = subcategory.products.filter(product => product.href === props.params.single);
                            }
                        });
                    }
                });
            }
        });
        return filteredProducts;
    };

    const handleCount = (command) => {
        if (command === 'up') {
            setCounter(counter + 1);
        } else if (command === 'down' && counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
    };

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor);
    };


    return (
        <>
            <Breadcrumb>
                <BreadcrumbList className="py-8 px-4 lg:px-24">
                    {[props.params.category, props.params.products, props.params.single].map((item, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink>
                                <Link className={'capitalize'} href={`/${props.params.slug}/${index === 0 ? '' : props.params.category}/${item}`}>{item}</Link>
                            </BreadcrumbLink>
                            {index !== 2 && <BreadcrumbSeparator/>}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            <section className="min-h-full flex flex-col lg:flex-row">
                <div className="relative lg:w-1/2 lg:flex lg:items-center  lg:h-full">
                    <Carousel setApi={setApi} className="relative" orientation="horizontal">
                        <CarouselContent className="lg:flex lg:items-center">
                            {[1, 2, 3, 4, 5].map((element, index) => (
                                <CarouselItem key={index} className="flex items-center justify-center sm:basis-full md:basis-1/3 lg:basis-full">
                                    <img className="md:max-h-[500px] object-contain w-full md:w-full lg:w-2/3"
                                         src={`/${filterProducts()[0].img}`}
                                         alt={`/${filterProducts()[0].name}`}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden lg:flex absolute -bottom-5 right-1/4 bg-red-300">
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </div>
                    </Carousel>
                    <div className="absolute md:hidden flex bottom-6 gap-1 mx-7">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <span key={index} className={`w-10 h-2 bottom-2 ${current === index ? 'bg-black/90' : 'bg-black/30'}`}></span>
                        ))}
                    </div>
                </div>
                <div className="relative h-full lg:w-1/2">
                    <div className="absolute py-8 lg:py-0 px-7 lg:pr-7 w-full">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col text-start">
                                <p className="text-2xl lg:text-2xl font-semibold">{filterProducts()[0].name}</p>
                                <p className="text-md lg:text-lg">by {props.params.slug}</p>
                            </div>
                            <HeartIcon className="hidden" size="26px" stroke={0} fill="#AF63FF"/>
                        </div>
                        <div className="pt-5 w-full text-primary/80 lg:text-md">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at earum ipsum natus neque pariatur perferendis ratione reprehenderit sed ut?
                        </div>
                        <div className="pt-5 text-md flex gap-1 lg:text-lg">
                            <p className="text-primary/80">Size :</p> {size}
                        </div>
                        <div className="flex gap-2 pt-4">
                            {['XS', 'S', 'M', 'L', 'XL'].map((sizes, index) => (
                                <span key={index} className={`text-md w-8 items-center flex justify-center h-8 border ${size === sizes ? 'border-black border-2' : ''}`} onClick={() => handleSizeChange(sizes)}>
                                    {sizes}
                                </span>
                            ))}
                        </div>
                        <div className="pt-5 text-md flex gap-1">
                            <p className="text-primary/80">Color :</p> {color}
                        </div>
                        <div className="flex gap-4 pt-4">
                            {['Gray', 'Black'].map((singleColor, index) => (
                                <span key={index} style={{backgroundColor: singleColor}} className={`text-md w-8 items-center flex justify-center h-8 border ${color === singleColor ? 'border-black border-2' : 'border-none'}`} onClick={() => handleColorChange(singleColor)}></span>
                            ))}
                        </div>
                        <div className="pt-10 flex flex-col gap-5 justify-between items-center w-full">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" onClick={() => handleCount('down')}>-</Button>
                                    <p className="text-xl text-[#495057]">{counter}</p>
                                    <Button variant="outline" onClick={() => handleCount('up')}>+</Button>
                                </div>
                                <p className="text-2xl font-semibold">Total: {totalPrice} L</p>
                            </div>
                            <Link href={`/payment?quantity=${counter}&id=${filterProducts()[0].id}`}>
                                <Button className="w-full py-6 bg-[#212529] -translate-y-2 lg:rounded-2xl lg:translate-y-0 lg:py-6 text-xl">Add to Cart</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
