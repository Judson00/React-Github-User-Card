import React, { Component } from 'react';
import axios from 'axios';

import './app.css';
import CardCreator from './components/Card-Creator';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  componentDidMount(){

    axios.get(`https://api.github.com/users/judson00`)
      .then(res => 
        {
        this.setState({
          user: res.data
        }) 
        console.log(res)
        axios.get(res.data.followers_url)
        .then(response => {
          this.setState({
            followers: response.data
          })
          console.log(response)
        })
      })
        .catch(err => {
          console.log("There was an error");
        })
    }

  render(){
    return (
      <div className='App'>
        <CardCreator 
          user={this.state.user}
          followers={this.state.followers}
        />
      </div>
    );
  }
}


export default App;
