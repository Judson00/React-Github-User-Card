import React, { Component } from 'react';
import axios from 'axios';

import './app.css';
import CardCreator from './components/Card-Creator';

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

    // Build a form that allows you to search for different Github users. When the form is submitted, use componentDidUpdate to fetch the data for the user you typed in. Set that new user's data to state to trigger the component to rerender and display your new user. Don't forget to fetch their followers as well.

  render(){
    return (
      <div className='App'>
        <div>
          <h1>User Search</h1>
          <input 
            type='text'
            value={this.state.doggoText}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchUsers}>Find User</button>
        </div>
        <CardCreator 
          user={this.state.user}
          followers={this.state.followers}
        />
      </div>
    );
  }
}


export default App;
