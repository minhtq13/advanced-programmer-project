
import React from 'react'
import './homepage.css'
import Slider from "./slider/slider"
import Banner from "./banner/banner"
import Benefit from "./benefit/benefit"
import Feature from "./feature/feature"
import Promotion from "./promotion/promotion"
import Footer from "./footer/footer"

export default function Homepage() {
    return (
    <div>
    <Slider />
    <Banner />
    <Benefit />
    <Feature />
    <Promotion />
    <Footer />   
    </div>
    )
}
