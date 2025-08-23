import React from 'react'
import './App.css';
import Login from './Login';
import Greeting from './Greeting';
import Product from './Product';
import UserList from './UserList';

const App = () => {
  const users = [
  { id: 1, name: "Venkatesh", age: 22 },
  { id: 2, name: "Rahul", age: 24 },
  { id: 3, name: "Aman", age: 21 }
];
  return (
    <div>
        <Login/>
        <Greeting isMorning={false}/>
        <Product inStock = {false}/>

{

        users.map((user) =>(
          <UserList id = {user.id} name = {user.name} age = {user.age}/>
        ))
}
    </div>
  )
}

export default App
