import React, { Component } from 'react';
import '../../App.css';
import UserList from '../containers/user';
import UserDetails from '../containers/user.details';
class App extends Component {
  render() {
    return (
      <div>
        <h2>user names</h2>
        <UserList />
        <hr/>
        <h2>user lists</h2>
        <UserDetails />
      </div>
    );
  }
}

export default App;
