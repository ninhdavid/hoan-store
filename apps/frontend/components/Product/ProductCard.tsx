import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    product: any;
    className:string;
};

const ProductCard = ({ product ,className}: Props) => {
    return (
        <div className='flex justify-center'>
            <Link
                href={`/product/id`}
                className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
            >
                <Image src={product.src} alt={product.name} width={500} height={500} />
                <div className={`p-4 leading-relaxed text-black/[0.9] ${className}`}>
                    <h2 className="text-xl uppercase font-medium leading-relaxed">{product.name}</h2>
                    <div className="flex items-center pl-3 p-1   text-black/[0.5]">
                        <p className="mr-2 text-lg font-semibold">&#8363;{product.price}</p>

                        <>
                            <p className="text-base  font-medium line-through">&#8363;10000000</p>
                            {/* <p className="ml-auto text-base font-medium text-red-500">sale % off</p> */}
                        </>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
