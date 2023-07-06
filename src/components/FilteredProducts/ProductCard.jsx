
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,

} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../rtk/slices/productsSlice';
import { Link, useParams } from 'react-router-dom'



const ProductCard = ({ id, name, img, text, price, colors }) => {
    const dispatch = useDispatch()
    const { type } = useParams()
    return (
        <Link to={`/FilteredProducts/${type}/` + id}>
            <Card className="w-[300px]" onClick={() => dispatch(singleProduct)} >
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img src={img} className="w-full h-[350px] object-cover" alt={name} ></img>
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                        <Typography color="blue-gray" className="font-medium">
                            {name}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            {price}$
                        </Typography>
                    </div>
                    <Typography variant="small" color="gray" className="font-normal opacity-75">
                        {text}
                    </Typography>
                </CardBody>
                <CardFooter divider className=' flex items-center justify-between py-4'>
                    <Typography variant='small' color='gray' className='flex gap-1 p-3' >
                        {colors?.map((color, index) => {
                            return < i key={index} style={{ backgroundColor: color }} className='fas fa-map-marker-alt fa-sm  mt-[3px] p-2 rounded-full mr-4' ></i>
                        })}
                    </Typography>
                </CardFooter>
            </Card>
        </Link>
    )

}
export default ProductCard;