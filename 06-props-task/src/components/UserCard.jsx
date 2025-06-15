import React from 'react';
import  "./UserCard.css";

const UserCard = ({name = 'Guest', age, avatar, email, isOnline}) => {
//     const users = [
//   {
//     name: "Amit Sharma",
//     age: 24,
//     email: "amit@example.com",
//     avatar: "https://i.pravatar.cc/150?img=1",
//     isOnline: true
//   },
//   {
//     name: "Sneha Patel",
//     age: 28,
//     email: "sneha@example.com",
//     avatar: "https://i.pravatar.cc/150?img=5",
//     isOnline: false
//   }
// ];
  return (
   <>
    <div className="cards-container">
        
        <div className="card-box">
            <img src={avatar} alt="" />
            <h1>Name : {name}</h1>
            <h2>Age : {age}</h2>
            <h3>Email : {email}</h3>
            <h4>isOnline : {isOnline ? 'Online🟢' : 'Offline🔴'}</h4>
           
        </div>

                {/* {
                    users.map((user) =>(
                        <div className="card-box">
                            <h1>{user.name}</h1>
                            <h2>{user.age}</h2>
                            <h3>{user.email}</h3>
                            <h4>{user.isOnline}</h4>
                        </div>
                    ))
                } */}
    </div>
   </>
  )
}

export default UserCard
