import "./App.css";
import React, { useState } from "react";
import { UserChildren, UserClass, UserFunction } from "./user";
import { Gumb } from "./user/Gumb";

// const users = [
//   { name: "Ivan", years: 30 },
//   { name: "Marko", years: 35 },
//   { name: "Ana", years: 25 },
// ];

export default function App() {
  const [users, setUsers] = useState([
    { name: "Ivan", years: 30 },
    { name: "Marko", years: 35 },
    { name: "Ana", years: 25 },
  ]);

  // const [child, setChild] = useState("A hobi mi je sviranje gitare");

  const child = "A hobi mi je sviranje gitare";

  const handleButtonPress = () => {
    const newUser = users.map((user) => {
      const ageIncrease = Math.random().toFixed(1) * 10;
      console.log(ageIncrease);
      return {
        ...user,
        years: user.years + ageIncrease,
      };
    });

    setUsers(newUser);
  };

  return (
    <div className="App App-header">
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>

      {/* <button onClick={handleButtonPress}>Promjeni Godine</button> */}

      <Gumb onClick={handleButtonPress} />

      <UserFunction name={users[0].name} years={users[0].years} />
      <UserFunction name={users[1].name} years={users[1].years} />
      <UserClass name={users[2].name} years={users[2].years} />
      <UserChildren name="Edo" years={100}>
        {child}
      </UserChildren>
    </div>
  );
}
