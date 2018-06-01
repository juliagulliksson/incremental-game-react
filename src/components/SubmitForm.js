import React, {Component} from 'react';
import InputField from './elements/InputField';
import Username from './elements/Username';

export default class SubmitForm extends Component {

  state = {
    username: "",
    writeUsername: true
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      this.setState({
        username: e.target.value,
        writeUsername: !this.state.writeUsername
      })
    }
  }

  render(){
    return ( 
      <div className="username-input">
        <div className="input-field form-group">
          <p>Welcome to <span className="title">Avocado Clicker</span>,</p>
          { this.state.writeUsername && <InputField handleSubmit = { this.handleSubmit }
          placeholder="write your username..."/> }
          { !this.state.writeUsername && <Username username = { this.state.username }/> }
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}