import React from "react";
import axios from 'axios';

class connectionExample extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    };
  }

  fetchData() {
  fetch('http://127.0.0.1:8000/api')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      this.setState({
        data: data,
      });
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}


  componentDidMount(){
    this.fetchData();
  }
  render() {
    return <div>
      <header>Data Generated From Django</header>
      <hr></hr>
      {this.state.data.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.name}</h2>
            <img src={output.image.url} alt={output.name}/>
            <h3>{output.description}</h3>
            <h3>${output.price}</h3>
          </div>
        </div>
      ))}
    </div>
  }
}
export default connectionExample;
