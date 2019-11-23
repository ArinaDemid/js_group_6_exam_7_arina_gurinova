import React from "react";

const DishStatus = props => {

    return (
        <div className='Dish-info'>
            <p className='Dish-name'>{props.name}</p>
            <p>x {props.count}</p>
            <p className='Dish-priceTotal'> = {props.summa} KGS</p>
            <p className='Dish-remove' onClick={props.remove}><i className="fas fa-trash-alt" style={{fontSize: '20px'}}></i></p>
        </div>
    )
};

export default DishStatus;