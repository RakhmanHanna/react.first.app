import { Component } from 'react';

export class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countvalue: 0,
    };
  }
}

handleIncrement = () => {
    this.setState({ countValue: countValue + 1});
};

handleDecrement = () => {
    if (this.state.countValue > 0) {
        this.setState((state) => {
            const decrementValue = state.countValue - 1;
            return {
                countvalue: decrementValue,
            };
        };
    };
};

handleReset = () => {
this.setState()
};





render() {

}
