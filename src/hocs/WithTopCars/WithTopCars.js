import React from "react";

export const WithTopCars = Component => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        topCars: [0, 2]
      };
    }

    render() {
      return <Component {...this.props} topCars={this.state.topCars} />;
    }
  }

  return HOC;
};
