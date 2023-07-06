import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dotSlide, nextSlide, prevSlide } from "../../rtk/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";
const Slider = () => {
    const slideIndex = useSelector((state) => state.slider.value);
    console.log('slideIndex', slideIndex);
    const dispatch = useDispatch()
    return (
        <>
            <div className="relative pb-4">
                <div>
                    {sliderData.map((item) => {
                        return (
                            <div className={parseInt(item.id) === slideIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"} key={item.id}>
                                <div>
                                    {
                                        parseInt(item.id) === slideIndex && (
                                            <img className="h-[900px] w-full" src={item.img} alt="shoes"></img>
                                        )
                                    }
                                </div>
                                <div className="absolute top-44 mx-auto inset-x-1/4">
                                    <p className="text-white text-2xl text-center font-inter font-bold">{parseInt(item.id) === slideIndex && item.text}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="flex  absolute bottom-10 left-[45%] " >
                    {
                        sliderData.map((dot, index) => {
                            return (
                                <div className="mr-4" key={dot.id}>
                                    <div className={index === slideIndex ? "bg-green-300 rounded-full p-2 cursor-pointer" : "bg-white rounded-full p-2 cursor-pointer"} onClick={() => dispatch(dotSlide(index))}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button className="absolute top-[50%] bg-white rounded-full p-2 hover:bg-green-300  " onClick={() => dispatch(nextSlide(slideIndex + 1))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    </button>
                    <button className="absolute top-[50%] right-[0%] bg-white rounded-full  p-2 hover:bg-green-300  " onClick={() => dispatch(prevSlide(slideIndex - 1))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Slider;
