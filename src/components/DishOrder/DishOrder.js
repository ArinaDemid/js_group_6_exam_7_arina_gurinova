import React from "react";

const DishOrder = ({totalPrice}) => {
    let changeClassesEmptyOrder = ['DishOrder-empty'];
        
    if (totalPrice !== 0) {
        changeClassesEmptyOrder.push('DishOrder-emptyHide');
    }
    return (
        <p className={changeClassesEmptyOrder.join(' ')}>Order is empty! <br></br><br></br> Please add some dishes!</p>
    )
};
    
export default DishOrder;