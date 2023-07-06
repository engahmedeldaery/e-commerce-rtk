import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { Button } from '@material-tailwind/react'
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cartSlice";

const ProductSectionItem = ({ id, name, text, size, price, img, color, totalPrice }) => {
    const dispatch = useDispatch()
    const defaultSize = size[0];
    const defaultColor = color[0];

    return (
        <>

            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src={img} alt={name} />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                        {text}
                    </Typography>
                    <div className=" flex justify-between items-center pt-4">
                        <Typography color="blue" className="font-medium mr-5" textGradient>
                            Size left : {defaultSize}
                        </Typography>
                        <Typography color="blue" className="font-medium" textGradient>
                            Color :{" "}<span className="px-2 rounded-full ml-2" style={{ backgroundColor: defaultColor }}></span>
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content='Add To Cart' placement='bottom'><Button onClick={() => dispatch(addToCart({
                        id: id,
                        img: img,
                        text: text,
                        name: name,
                        amount: 1,
                        price: price,
                        totalPrice: totalPrice,
                        size: defaultSize,
                        color: defaultColor,

                    }))} size="lg" variant="outlined" color="gray" ripple={true}>Add to Cart</Button></Tooltip>
                </CardFooter>
            </Card>
        </>
    )

}
export default ProductSectionItem;