import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react"
import { addToCart } from "../../rtk/slices/cartSlice";



const SingleProduct = () => {
    const product = useSelector((state) => state.products.singleProduct);
    console.log('singleproduct', product);
    const { id } = useParams();
    const dispatch = useDispatch();

    const productSize = product[0].size ? product[0].size[0] : "";
    const productColor = product[0].color[0];
    const [size, setSize] = useState(productSize);
    console.log('size', size)
    const [color, setColor] = useState(productColor);

    return (
        <>
            <div className="m-6 p-4 border border-gray-500 ">
                <div>
                    <h1 className="text-2xl font-inter font-bold tracking-normal leading-none">Product Details</h1>
                </div>
                {
                    product.filter((product) => product.id === id).map((item, index) => {
                        return (
                            <div key={index} className="flex items-center  justify-center py-10">
                                <div className="pl-20   grow-[2]">
                                    <img className="h-[400px] rounded-lg  " src={item.img} alt={item.name} />
                                </div>
                                <div className="grow-[3]">
                                    <div className="max-w-lg">
                                        <h5 className=" text-2xl font-inter font-bold tracking-normal leading-none pb-5">{item.name}</h5>
                                        <p className=" text-orange-700 font-inter font-bold tracking-normal leading-none pb-2" >15% OFF</p>
                                        <p className="text-gray-600 font-inter font-bold tracking-normal leading-none pb-2">{item.text}</p>
                                        <div className="py-2">
                                            {item.size ? (
                                                <div>
                                                    <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                                                    <select id='size' name='size' value={size} onChange={(e) => setSize(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                                        {item.size.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item}> {item}</option>

                                                            )
                                                        })}
                                                    </select>
                                                </div>) : (
                                                <div>
                                                    <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a size</label>
                                                    <select id='size' name='size' disabled={true} value={size} onChange={(e) => { setSize(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                                        {item?.size?.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item}>{item}</option>

                                                            )
                                                        })}
                                                    </select>
                                                </div>)}
                                        </div>

                                        <div className="py-4">
                                            <div>
                                                <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a color</label>
                                                <select id='color' name='color' value={color} onChange={(e) => { setColor(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                                    {item.color.map((color, index) => {
                                                        return (
                                                            <option key={index} value={color}> {color}</option>

                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>



                                    <Tooltip content='Add to Cart' placment='bottom'>
                                        <Button color="gray" size="lg" variant="outlined" className=" m-6" ripple={true} onClick={() => dispatch(addToCart({
                                            id: item.id,
                                            name: item.name,
                                            img: item.img,
                                            text: item.text,
                                            size: size,
                                            color: color,
                                            amount: 1,
                                            price: item.price,
                                            totalPrice: item.price


                                        }))}>Add to Cart</Button>
                                    </Tooltip>

                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </>

    )

}
export default SingleProduct;