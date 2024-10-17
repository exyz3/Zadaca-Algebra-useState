import "./App.css";
import React from "react";
import { UserChildren, UserClass, UserFunction } from "./user";
import { Gumb } from "./user/Gumb";

// const users = [
//   { name: "Ivan", years: 30 },
//   { name: "Marko", years: 35 },
//   { name: "Ana", years: 25 },
// ];

export default class App extends React.Component {
  state = {
    users: [
      { name: "Ivan", years: 30 },
      { name: "Marko", years: 35 },
      { name: "Ana", years: 25 },
    ],
    child: "A hobi mi je sviranje gitare",
  };

  handleButtonPress = () => {
    const { users } = this.state;
    const ageIncrease = Math.random().toFixed(1) * 10;
    console.log(ageIncrease);

    const newUser = users.map((user) => {
      return {
        ...user,
        years: user.years + ageIncrease,
      };
    });
    this.setState({ users: newUser });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="App App-header">
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>

        {/* <button onClick={this.handleButtonPress}>Promjeni Godine</button> */}
        <Gumb onClick={this.handleButtonPress} />

        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction
          name={this.state.users[1].name}
          years={this.state.users[1].years}
        />
        <UserClass
          name={this.state.users[2].name}
          years={this.state.users[2].years}
        />
        <UserChildren name="Edo" years={100}>
          {this.state.child}
        </UserChildren>
      </div>
    );
  }
}
