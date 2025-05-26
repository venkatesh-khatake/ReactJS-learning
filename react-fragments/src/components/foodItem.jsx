import Items from "./Items";

const FoodItems = () =>{
      let foodItems = ['Apple','Banana','Mango','Grapes','Watermelon'];

return(
     <ul className="list-group">
        {
          
        foodItems.map((item) =>  (
            <Items  foodItem = {item}/>
        ))
      }

</ul>
)
}
export default FoodItems;