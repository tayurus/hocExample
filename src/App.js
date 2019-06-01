import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { AllCarsList } from "./components/AllCarsList/AllCarsList";
import { UsersCarsList } from "./components/UsersCarsList/UsersCarsList";
import { WithTopCars } from './hocs/WithTopCars/WithTopCars';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {
          id: 0,
          name: "Жигули"
        },
        {
          id: 1,
          name: "BMW"
        },
        {
          id: 2,
          name: "Nissan"
        },
        {
          id: 3,
          name: "Lexus"
        },
        {
          id: 4,
          name: "Toyota"
        }
      ],
      userCars: [
        {
          id: 0,
          name: "Жигули"
        },
        {
          id: 1,
          name: "BMW"
        },
        {
          id: 2,
          name: "Nissan"
        }
      ]
    };
  }

  render() {

    const WrappedAllCarsList = WithTopCars(AllCarsList);
    const WrappedUsersCarsList = WithTopCars(UsersCarsList);

    return (
      <div className="App">
        <WrappedAllCarsList cars={this.state.cars} />
        <WrappedUsersCarsList cars={this.state.userCars} />
      </div>
    );
  }
}

export default App;
