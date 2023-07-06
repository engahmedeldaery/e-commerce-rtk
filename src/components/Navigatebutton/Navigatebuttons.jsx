import React from 'react'
import { Button } from '@material-tailwind/react';
import clothes from '../../assets/images/clothes.jpg';
import { filteredProducts } from '../../rtk/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Navigatebuttons = () => {

    const buttons = ['Hoodies', 'Dresses', 'Suits', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', 'Bags']
    const dispatch = useDispatch()
    return (
        <>
            <div className='flex items-center justify-center py-4  '>
                {
                    buttons.map((button, index) => {
                        return (
                            <div key={index} className='mr-4'>
                                <Link to={'/FilteredProducts/' + button}> <Button color='gray' size='lg' variant='outlined' ripples={true.toString()} onClick={() => dispatch(filteredProducts(button))} className='hover:bg-green-300 duration-300 ease-in-out '>{button}</Button></Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='bg-green-300 w-[55%] mx-auto '>
                <h3 className='text-orange-900 text-center  font-inter  tracking-normal '> Sales UP TO 50%</h3>
            </div>
            <div className='flex items-center justify-center py-4'>
                <img src={clothes} alt='clothes' className='h-[50%] w-[70%] rounded-md shadow-lg shadow-gray-600'></img>
            </div>
        </>
    )
}

export default Navigatebuttons;
