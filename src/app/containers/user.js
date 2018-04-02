import React ,{Component} from 'react';
import { bindActionCreators} from 'redux';
import {connect }  from 'react-redux';
import {selectedUser} from '../actions/index';
class UserList extends Component{
    createList(){
        return this.props.users.map( user => 
        <li 
            onClick={()=> this.props.selectedUser(user)}
            key={user.id}>{user.name}</li>)
    }
    render(){
        return(
            <ul>
                {this.createList()}
            </ul>    
        )
    }
}
function mapStateToProps(state){
    return{
        users:state.users
    }
  }
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedUser:selectedUser},dispatch)
}  
export default connect(mapStateToProps,matchDispatchToProps)(UserList);