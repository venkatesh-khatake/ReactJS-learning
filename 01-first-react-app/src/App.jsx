import { useState } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Greeting from './Greeting';
import OnoffBtn from './OnoffBtn';
import Post from './Post';
import ShowHide from './ShowHide';
import UserCard from './UserCard';
import InputName from './InputName';
import ProfileCard from './ProfileCard';
function App(){
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name);
    setSubmittedName(name);
  }

  const users = [
    {id : 1, name : "Venkatesh", age : 22, city : "Pune"},
    {id : 2, name : "Akash", age : 27, city : "Bangalore"},
    {id : 1, name : "Kiran", age : 25, city : "Buldhana"},
  ]

  return (
    <>
      {/* <h1>Hello World</h1>
      <h2>React JS</h2>
      <FunctionComponent/>
      <ClassComponent/>
      <hr />
      <Greeting name = "Pravin"/>
      <Greeting name = "Venkey"/> */}

    
 <h1>User List</h1>
      <div
        style={{
          display:'flex',
          gap:'10px '
        }}
      >

       
        {
          users.map((user)=>(
            <UserCard key={user.id} name={user.name} age={user.age} city={user.city}></UserCard>
          ))
        }
      </div>
      <hr />

      <OnoffBtn/>
      <hr />
      <ShowHide/>
      <hr />
      <Post/>
<hr />

        <form action="" onSubmit={handleSubmit}>
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
          />
          <button type='submit'>Submit  </button>
        </form>

      <InputName name = {name}/>


        <hr />
        <ProfileCard/>
    </>
  )
}

export default App;