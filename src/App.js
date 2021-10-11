import React, { Component } from 'react'
import UserCard from './Component/UserCard/UserCard';
import SearchBox from './Component/SearchBox/SearchBox';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      users:[],
      info: {},
      filteredUsers: []
    }
  }

  getRandomUser = async()=> {
    const result = await fetch('https://randomuser.me/api/?results=5');
    const { results, info } = await result.json();
    this.setState({users: results, info: info})
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    // console.log(evt.target);
    const {users} = this.state;

    const filteredUsers = users.filter(user => {
      return user.name.first.toLowerCase().includes( value.toLowerCase())
    })

    this.setState({
      filteredUsers: filteredUsers
    })
    
  }   

  componentDidMount(){
    
    this.getRandomUser();
  }

  
  
  render(){
      // console.log(this.state.users)
      
    const {users, filteredUsers} = this.state;

    return <div>

        <div>
           <SearchBox handleChange={this.handleChange}/>
        </div>
        <div className="user-card">
           {filteredUsers.length > 0 ? filteredUsers.map((user, idx) => <UserCard key={idx} data={user}/>) : 
           users.map((user, idx) => <UserCard key={idx} data={user}/>)}  
           {/* key is declare when any loop function applied  */}
       </div>
    </div>
  }
}

export default App;


// filter and bind