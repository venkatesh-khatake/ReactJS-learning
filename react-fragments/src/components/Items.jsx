const Items = (props) =>{
    return(
            <li key = {props.foodItem} className="list-group-item">
                {props.foodItem}</li>

    )
}
export default Items;