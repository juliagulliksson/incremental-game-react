import React, {Component} from 'react';
import InputField from './elements/InputField';
import Username from './elements/Username';

export default class SubmitName extends Component {

  state = {
    username: "",
    writeUsername: true
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      this.setState({
        username: e.target.value,
        writeUsername: false
      })
    }
  }

  render(){
    return ( 
      <div className="input-field">
        { this.state.writeUsername && <InputField handleSubmit = { this.handleSubmit }/> }
        { !this.state.writeUsername && <Username username = { this.state.username }/> }
      </div>
    )
  }
}