import React from 'react'
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Navigatebuttons from '../Navigatebutton/Navigatebuttons';
import ProductSection from '../ProductSection/ProductSection';

import Footer from '../Footer/Footer'
const Main = () => {
    return (

        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Navigatebuttons></Navigatebuttons>
            <ProductSection ></ProductSection>
            <Footer></Footer>
        </div>
    )





}
export default Main;