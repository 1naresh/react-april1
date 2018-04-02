import React ,{Component} from 'react';
import { bindActionCreators} from 'redux';
import {connect }  from 'react-redux';
class UserDetails extends Component{
   
    render(){
        return(
            <div>
                <ul>
                    {this.props.user && <li> {this.props.user.name}</li> }
                </ul>    
            </div>       
        )
    }
}
function mapStateToProps(state){
    return{
        user:state.activeUser
    }
  }

export default connect(mapStateToProps)(UserDetails);