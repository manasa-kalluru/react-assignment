import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validate from './Validate/Validate';
import Char from './Char/Char';

class App extends Component {
    state = {
       names: 'manasa',
       userInput : ''
    };

    nameChangeHandler = () => {
        this.setState({
                names: 'manu!!'
            }
        )
    };
    textChangeHandler = (event) => {
        this.setState({
                names: event.target.value
            }
        )
    };

    textCountHandler = (event)=> {
        this.setState({userInput: event.target.value});

    };
    deleteCharHandler = (index)=> {
        const text=this.state.userInput.split('');
        text.splice(index,1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});

    };
  render() {
      const charList = this.state.userInput.split('').map((ch,index)=> {
          return <Char charac = {ch} key = {index} clicked={()=>this.deleteCharHandler(index)}/>;
      });
    return (
      <div className="App">
        <UserInput
            typed={ this.textChangeHandler}
            prevName={this.state.names}
        />
        <UserOutput />
        <UserOutput />
        <UserOutput
            name={this.state.names}/>
            <button onClick={() => this.nameChangeHandler()}>click button</button>
         <input type="text" onChange={this.textCountHandler} value={this.state.userInput}/>
         <p>{this.state.userInput}</p>
         <Validate inputLength = {this.state.userInput.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
