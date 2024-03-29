import React, {Component} from 'react';
import './App.css';
import './components/DishButton/DishButton.css';
import './components/DishOrder/DishOrder.css';
import './components/TotalPrice/TotalPrice.css';
import './components/DishStatus/DishStatus.css';
import DishList from './components/DishList/DishList';
import DishOrderEmpty from './components/DishOrder/DishOrderEmpty';
import DishOrderFull from './components/DishOrder/DishOrderFull';
import TotalPrice from './components/TotalPrice/TotalPrice';
import DishButtonShow from './components/DishButton/DishButtonShow';

class App extends Component {
  
  state = {
    dishes: [
      {dish: 'Hamburger', count: 0},
      {dish: 'Sandwich', count: 0},
      {dish: 'Fries', count: 0},
      {dish: 'Cake', count: 0},
      {dish: 'Juice', count: 0},
      {dish: 'Coffee', count: 0},
      {dish: 'Cola', count: 0},
      {dish: 'Tea', count: 0}
    ],
    totalPrice: 0
  };
  
  addDish = (name) => {
    const dishes = [...this.state.dishes];
    dishes.forEach(function(item) {
      if (item.dish === name) item.count++;
    });

    let totalPrice = this.state.totalPrice;
    totalPrice = this.addTotal();

    this.setState({dishes, totalPrice});
    
  };
  
  removeDish = (name) => {
    const dishes = [...this.state.dishes];
    dishes.forEach(function(item) {
      if (item.dish === name && item.count !== 0) item.count--;
    });

    let totalPrice = this.state.totalPrice;
    totalPrice = this.addTotal();

    this.setState({dishes, totalPrice});
  };
  
  addTotal = () => {
    let countPrice = 0;
    for (let i = 0; i < this.state.dishes.length; i++) {
      countPrice += DishList[i].price * this.state.dishes[i].count;
    }
    return countPrice;
  };
  
  render() {
    let changeClassesFullOrder = ['DishOrder-total'];
    
    if (this.state.totalPrice === 0) {
        changeClassesFullOrder.push('DishOrder-totalHide');
    }
    return (
      <div className="App">
        <DishOrderEmpty
          totalPrice = {this.state.totalPrice}
        />
        <div className={changeClassesFullOrder.join(' ')}>
          <DishOrderFull
            removeDish = {this.removeDish}
            dishes = {this.state.dishes}
          />
          <TotalPrice
            money={this.state.totalPrice}
          />
        </div>
        <div className='AppBlockDishAdd'>
          <p className='Dish-title'>Add dishes:</p>
          <DishButtonShow
            addDish = {this.addDish}
          />
        </div>
      </div>
    );
  }
}

export default App;
