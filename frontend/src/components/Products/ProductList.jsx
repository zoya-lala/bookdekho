import React from 'react';
import ProductListCSS from "./styling.module.css";
import {Products} from "components";
import img from "assets/images/DS.jpg";
import image from "assets/images/OSBook.jpg"
import network from "assets/images/Networking.jpg"
import Internet from "assets/images/internet.jpg"
import cloud from "assets/images/cloud.jpg"
import mba from 'assets/images/tancet-mba.jpg'
import pharmacy from "assets/images/phar.jpg"
import phar from "assets/images/ph.jpg"

export const ProductList = () => {
    return ( 
        <div className= {ProductListCSS.List}>
            <Products pic={img} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={image} title="Operating System" by="Vivek Bhambri" year="2015" dept="BCA" mrp="600" rate="500" />
            <Products pic={network} title="Computer Networking" by="Dr. A. Damodaram" year="2022" dept="B.E" mrp="800" rate="690" />
            <Products pic={Internet} title="Internet of Value" by="Nikhil Vadgama" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={cloud} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={mba} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={pharmacy} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={phar} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={img} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={img} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
            <Products pic={img} title="Data Structures" by="Jay Wengrow" year="2020" dept="MCA" mrp="800" rate="Free" />
        </div>
    )
}

// export default ProductList;