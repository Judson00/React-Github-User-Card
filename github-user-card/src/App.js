import React, { Component } from 'react';
import axios from 'axios';

import './app.css';
import CardCreator from './components/Card-Creator';
import InputForm from './components/Form';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: [],
      followers: [],
      userText: ''
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

    componentDidUpdate(prevProps, prevState){
      if(this.state.user !== prevState.user && this.state.user === '' ){
        alert("Not a valid UserName")
      }
    }

    handleChanges = e =>{

      this.setState({
        userText: e.target.value
      })
    }

    fetchUsers = e => {
      e.preventDefault()
      axios
      .get(`https://api.github.com/users/${this.state.userText}`)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
    }

  render(){
    return (
      <div className='App'>
        <InputForm 
          updateText={this.state.userText}
          changeHandler={this.handleChanges}
          fetch={this.fetchUsers}
        />
        <CardCreator 
          user={this.state.user}
          followers={this.state.followers}
        />
      </div>
    );
  }
}


export default App;
