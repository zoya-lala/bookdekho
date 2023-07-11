import React from "react";
import CSS from "./styles.module.css";

export const Products = ({ pics, title, by, year, dept, mrp, rate, onClick }) => {

    return (
        <div onClick={onClick}>
            <div className={CSS.ColumnProduct}>
                <div className={CSS.Image}>
                    <img src={pics} alt="Book" />
                </div>

                <div className={CSS.BookDetails} >
                    <h1>{title}</h1>
                    <div className={CSS.by}>By {by}</div>
                    <div className={CSS.year}>Year Published: {year}</div>
                    {/* <div className={CSS.dept}>Department: {dept}</div> */}
                    <div className={CSS.price}>
                        <h3>{rate === "Free" ? rate : `₹${rate}`}</h3>
                        <h4>₹{mrp}</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

// export default Products;
