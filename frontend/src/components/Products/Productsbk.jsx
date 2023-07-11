import React from "react";
import ProductsCSS from "./styles.module.css";
import DS from "../../assets/images/DS.jpg";

export const Products = () => {
    return (
        <div className={ProductsCSS.ColumnProduct}>
            <div className={ProductsCSS.Image}>
                <img src={DS} alt="Book" />
            </div>

            <div className={ProductsCSS.BookDetails}>
                <h4> Data Structures </h4>
                <p>By Jay Wengrow<br></br>Publication Year: 2020</p>
                <h3><b><s> ₹800  </s> Free</b></h3>
            </div>
        </div>
    )
}

// export default Products;
