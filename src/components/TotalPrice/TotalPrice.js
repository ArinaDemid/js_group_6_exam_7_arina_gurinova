import React from "react";

const TotalPrice = props => {

    return (
        <div className="TotalPrice">
            <p className="TotalPrice-price"><span className="TotalPrice-span">Total price: </span>{props.money} KGS</p>
        </div>
    )
};

export default TotalPrice;