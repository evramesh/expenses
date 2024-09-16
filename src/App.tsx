import "./styles.css";
import { Component } from "react";

class App extends Component {
  state = {
    listItems: [],
    date: "",
    Date: "",
    description: "",
    des: "",
    amount: "",
    dup: "",
  };

  inputDesc = (e) => {
    const inp = e.target.value;
    this.setState({ des: inp });
  };

  addData = () => {
    const { des, dup, date, listItems } = this.state;
    const dic = {
      description: des,
      amount: dup,
      Date: date,
    };
    console.log(dic);
    this.setState({
      listItem: [...listItems, dic],
      des: "",
      dup: "",
      date: "",
    });
  };

  inputAmout = (e) => {
    this.setState({ dup: e.target.value });
  };

  dateInput = (e) => {
    this.setState({ date: e.target.value });
  };

  render() {
    const { description, amount, Date, listItems } = this.state;
    console.log(listItems);
    return (
      <form>
        <div>
          <input
            onChange={this.inputDesc}
            placeholder="Enter Description"
            type="text"
          />
          <input
            onChange={this.inputAmout}
            placeholder="Enter Amout"
            type="number"
          />
          <input onChange={this.dateInput} type="date" />
          <button type="button" onClick={this.addData}>
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default App;
