import React, {Component} from 'react';
import './App.css';
import './components/DishButton/DishButton.css';
import './components/DishOrder/DishOrder.css'
import DishButton from './components/DishButton/DishButton';
import DishList from './components/DishList/DishList';
import DishOrderEmpty from './components/DishOrder/DishOrderEmpty';
import DishOrderFull from './components/DishOrder/DishOrderFull';

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
    console.log(name);
    let totalPrice = this.state.totalPrice;
    totalPrice = this.addTotal();

    this.setState({totalPrice});
    
  };
  
  removeDish = (name) => {
    console.log(name);
  };
  
  addTotal = () => {
    this.state.totalPrice = 10;
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
        <DishOrderFull
          removeDish = {this.removeDish}
          dishes = {this.state.dishes}
        />
        <div className='AppBlockDishAdd'>
          <p className='Dish-title'>Add dishes:</p>
          
          {
            DishList.map((dish) => {
              return (
                <DishButton 
                  key={dish.name}
                  image={dish.image}
                  name={dish.name}
                  add={() => this.addDish(dish.name)}
                  price={dish.price}
                />
              )
            })
          }
        </div>
      </div>
        );
      }
    }
    
    export default App;
    