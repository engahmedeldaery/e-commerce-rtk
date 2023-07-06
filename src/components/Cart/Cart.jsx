import { Fragment } from "react";
import React from "react";
import {

    Dialog,
    DialogHeader,
    DialogBody,
    Button, Tooltip, DialogFooter

} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../rtk/slices/cartSlice";



const Cart = ({ openModal, setOpen }) => {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch()
    return (
        <div>
            {cart.length > 0 ? (<Fragment >
                <Dialog className="border-0 outlined-0" open={openModal} handler={() => setOpen(false)} animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 }
                }} >
                    <DialogHeader>The shopping bag</DialogHeader>
                    <DialogBody className="flex   flex-col justify-center items-start" divider>
                        {cart.map((item, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <div className="grid grid-cols-2  py-4">
                                            <div>
                                                <img src={item.img} alt={item.name} className=" h-[100px] rounded-md"></img>
                                                <div className="flex flex-col items-start">
                                                    <h4 className="font-bold  text-base text-black font-inter tracking-normal leading-none pt-4">{item.name}</h4>
                                                </div>

                                                <div className="max-w-xs pt-4">
                                                    <p className="font-bold text-xs text-black font-inter ">{item.text}</p>
                                                </div>
                                            </div>
                                            <div className="max-w-xs text-center pt-4">
                                                <p className="font-inter text-black text-xs font-bold  " >Selcted size :{''}
                                                    <span >{item.size}</span></p>
                                                <p className="font-inter text-black text-sm  font-bold  " >Selcted color :{''}
                                                    <span className="rounded-full px-2 ml-2" style={{ backgroundColor: item.color }} ></span></p>
                                                <p className="font-inter text-black text-xs font-bold pt-2 "> Amount:<span> {item.amount}</span></p>
                                                <p className="font-inter text-black text-xs font-bold pt-2 " >Single Item Price :<span>{item.price}$</span> </p>
                                                <p className="font-inter text-black text-xs font-bold pt-2">Total Item Price: <span>{" "} {item.totalPrice} $</span></p>
                                                <div className=" text-center pt-6">
                                                    <Tooltip content="Remove form the Cart" placement='bottom'>
                                                        <Button size="sm" color="red" ripple={true} variant="filled" onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })}
                    </DialogBody>
                    <DialogFooter className="flex justify-center item-center">
                        <p className="tracking-normal leading-none">Total Price Of All Products:{" "}<span>{totalPrice}$</span></p>
                    </DialogFooter>
                </Dialog>
            </Fragment >
            ) : (
                <Fragment>

                    <Dialog className="border-0 outlined-0" open={openModal} handler={() => setOpen(false)} animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 }
                    }}>
                        <DialogHeader>The shopping bag</DialogHeader>
                        <DialogBody divider>
                            <div >
                                <h1> your Bag is empty </h1>
                                <p>add your products</p>
                            </div>
                        </DialogBody>

                    </Dialog>
                </Fragment >
            )}


        </div>

    )

}
export default Cart