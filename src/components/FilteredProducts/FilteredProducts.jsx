
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import ProductCard from './ProductCard';
import Error from '../Error/Error';
import { filteredProducts, filterGender, sortByPrice, filterByColor, filterBySize } from '../../rtk/slices/productsSlice'

const FilteredProducts = () => {

    const products = useSelector((state) => state.products.filteredProducts)
    const error = useSelector((state) => state.products.error);
    console.log('products', products);
    const { type } = useParams();
    const genderButtons = ['male', 'female'];
    const colorButtons = ['red', 'green', 'purple', 'yellow', 'orange', 'blue', 'black', 'brown'];
    const sizeButtons = ['S', 'M', 'L', 'XL'];
    const dispatch = useDispatch();


    console.log('params', type)
    return (
        <>
            <div className='pt-16'>
                <div className='pl-14'>
                    <h1 className='text-2xl text-gray-600 font-inter font-bold tracking-normal leading-none '>{type}</h1>
                    <div className='flex items-center justify-between py-8' >
                        <div className='flex items-center'>
                            {genderButtons.map((item, index) => {
                                return <div key={index}>
                                    <Button color='gray' size='lg' variant='outlined' ripple={true} onClick={() => dispatch(filterGender(item))} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4' >{item}</Button>
                                </div>
                            })}
                            <Button color='gray' size='lg' variant='outlined' ripple={true} onClick={() => dispatch(sortByPrice())} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>High Price</Button>
                            <Menu>
                                <MenuHandler>
                                    <Button color='gray' size='lg' variant='outlined' ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Select a color</Button>
                                </MenuHandler>
                                <MenuList>
                                    {colorButtons.map((item, index) => {
                                        return (

                                            <MenuItem style={{ color: item }} onClick={() => dispatch(filterByColor(item))} key={index}>{item}</MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuHandler>
                                    <Button color='gray' size='lg' variant='outlined' disabled={type === 'Bags' || type === 'Shoes'} ripple={true} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Select a size</Button>
                                </MenuHandler>
                                <MenuList>
                                    {sizeButtons.map((item, index) => {
                                        return (
                                            <MenuItem key={index} onClick={() => dispatch(filterBySize(item))} >{item}</MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                        </div>
                        <div className='pr-14'>
                            <Button color='gray' size='lg' variant='outlined' ripple={true} onClick={() => dispatch(filteredProducts(type))} className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Clear filter</Button>
                        </div>
                    </div>
                </div>
                {error ? <Error></Error> : <div className='grid grid-cols-4 justify-center items-center py-8 gap-8   '>
                    {products.filter((product) => product.type === type).map((product, index) => {
                        return (
                            <div key={index}>
                                <ProductCard id={product.id} name={product.name} text={product.text} price={product.price} colors={product.color} img={product.img}></ProductCard>
                            </div>
                        )

                    })
                    }

                </div>}

            </div>
        </>
    )


}

export default FilteredProducts;