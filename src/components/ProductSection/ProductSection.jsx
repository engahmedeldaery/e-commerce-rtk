import React from "react";
import { storeData } from '../../assets/data/dummyData'
import ProductSectionItem from "../ProductSectionItem/ProductSectionItem";


const ProductSection = () => {

    return (
        <>
            <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
                <h2 className="text-red-600 text-center text-lg font-inter font-bold">Summer T-shirt Sale 30%</h2>
            </div>
            <div className="grid grid-cols-3 justify-center items-center py-8 gap-3 mx-auto max-w-7xl">
                {storeData.slice(0, 6).map((product, index) => {
                    return (

                        <div key={index}>
                            <ProductSectionItem id={product.id}
                                img={product.img}
                                name={product.name}
                                text={product.text}
                                price={product.price}
                                totalPrice={product.totalPrice}
                                size={product.size}
                                color={product.color}></ProductSectionItem>
                        </div>

                    )
                })}
            </div>
        </>
    )

}
export default ProductSection
