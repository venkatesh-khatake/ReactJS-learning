import React  from "react";
import FoodItem from "./components/foodItem";
import ErrorMessage from "./components/ErrorMessage";
import Items from "./components/Items";

function App(){
  let foodItems = ['Apple','Banana','Mango','Grapes','Watermelon'];
  // let fruits = [];

  //conditional rendering using if-else

  // if(foodItems.length === 0){
  //   return <h2>I am still Hungry.</h2>
  // }


  // Conditional rendering using ternary operator

  // let emptyMessage = 
  // foodItems.length === 0 ? <h2>I am hungry.</h2> : null;

  return(
    <>
      <h1>Healthy Food</h1  >
       
      {/* {emptyMessage} */}
    

      {/* conditional rendering using logical operator */}

     <ErrorMessage/>

     <FoodItem/>
    </>
  )
}

export default App;