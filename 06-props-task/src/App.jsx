import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <>
      <UserCard
        name="Venkey K."
        age={22}
        avatar="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
        email = 'venkey@gmail.com'
        isOnline = {true}
      />
    </>
  );
};

export default App;
