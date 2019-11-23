import React, {Component} from 'react';
import './App.css';
import './components/DishButton/DishButton.css';
import DishButton from './components/DishButton/DishButton';
import DishList from './components/DishList/DishList';

class App extends Component {

  state = {
    name: [
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
    
  };
  
  removeDish = (name) => {
    console.log(name);
  };
  
  addTotal = () => {
    
  };
  
  render() {
    
    return (
      <div className="App">
          <div className='AppBlockDishAdd'>
          <p className='Dish-title'>Add dishes:</p>
        
          {DishList.map((dish) => {
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
