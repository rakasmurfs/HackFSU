import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", data: [] }
  }

  callAPI() {
    fetch("http://localhost:3001/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callData(){
    fetch("http://localhost:3001/getData")
      .then(res => res)
      .then(res => this.setState({data: [...this.state.data, res]}));
  }

  componentWillMount() {
      this.callAPI();
      this.callData();
  }

  render(){
    return (
      <div className="App">
        <p className="App-intro">;{this.state.apiResponse}</p>
        {this.state.data.map((tmp) => {
          return <p>{tmp}</p>
        })}
      </div>
    );
  }
}

export default App;
