import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const UnpaidCart = (props: Props) => {
    return (
        <div className="flex flex-col px-[30px] md:px-0">
            <div className=" text-xs py-2 bg-slate-100 rounded-xl -mx-3 xl:text-sm">
                <div className="flex flex-row items-center h-[80px] rounded-2xl px-[10px] md:px-[20px] xl:px-[60px] 2xl:px-[40px] ">
                    <div className="pr-5 leading-4 -mt-3 xl:pr-14">
                        <p className="text-base font-medium leading-7">Add a Gift Note</p>
                        <p className="font-light">
                            Add a personal touch to your order with a Gift Note
                        </p>
                    </div>

                    <div className="flex flex-row items-center text-center h-10 px-3 -mx-3 rounded-3xl bg-white hover:cursor-pointer transition duration-200 hover:bg-gray-200 ">
                        <p className="font-semibold ">ADD</p>
                        <p className="font-light pl-1  ">&#8363;30.000</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-10 relative md:pt-20 lg:pt-[60px] xl:pt-[20px]">
                <div className="before:content=[''] before:border-t before:h-[1px] before:absolute before:top-3 before:w-full before:translate-y-[1/2] md:before:top-8 lg:before:top-6 xl:before:top-4">
                    <div className="flex flex-row items-center justify-between pb-5 lg:p-6 xl:p-8">
                        <p className="font-semibold text-xl">&#8363;SUM.SUM</p>
                        <button className="uppercase text-sm flex items-center justify-center rounded-3xl bg-gray-300 w-[140px] h-12 hover:bg-gray-400 transition duration-200 hover:cursor-pointer">
                            CHECKOUT
                        </button>
                    </div>
                    <div className="text-center leading-5 text-xs font-light">
                        <p>Your Express Delivery is Free!</p>
                        <p>Delivered DPD:1 to 3days from despatch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnpaidCart;
