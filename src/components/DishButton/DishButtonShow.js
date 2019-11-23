import React from "react";
import DishList from '../DishList/DishList';
import DishButton from '../DishButton/DishButton';

const DishButtonShow = ({addDish}) => {
    
    return DishList.map((dish) => {
        return (
            <DishButton 
                key={dish.name}
                image={dish.image}
                name={dish.name}
                add={() => addDish(dish.name)}
                price={dish.price}
            />
        )
    })
};
    
export default DishButtonShow;