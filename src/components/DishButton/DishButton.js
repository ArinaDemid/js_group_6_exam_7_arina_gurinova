import React from "react";

const DishButton = props => {
    return (
        <div className='DishButton-block' onClick={props.add}>
            <img className='DishButton-image' src={props.image} alt='post dish'/>
            <div className='DishButton-box'>
                <p className='DishButton-name'>{props.name}</p>
                <p className='DishButton-price'>Price: {props.price} KGS</p>
            </div>
        </div>
    )
};

export default DishButton;