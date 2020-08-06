import React from 'react';
import WelcomeList from './components/Welcome/WelcomeList';
import NameForm from  "./components/Welcome/NameForm";
import Question from './components/Questions/Question';

import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      pokemonTrainerInfo: [
        {
        trainer: '',
        id: ''
        }
      ],
      trainerList: [],
      pokemonQuiz: {
        counter: 0,
        questionId: 1,
        question: ''
      }
    }
  }

  addName = e => {
    e.preventDefault();
  
    const pokemonTrainerInfo = this.state.pokemonTrainerInfo.splice();
    pokemonTrainerInfo.push({trainer: this.state.trainerList, id: Date.now()})
    this.setState({pokemonTrainerInfo, trainerList: []})
    
    // if (this.state.trainerList.length === 1) {

    // }

    console.log('name....', this.state.trainer)
    console.log('pokemon trainer name....', this.state.pokemonTrainerInfo)
    console.log('student....', this.state.trainerList)
    console.log('value...', e.target.value)

  }


  handleChangeState = e => this.setState({ [e.target.name]: e.target.value });

  render(){
   if (this.state.pokemonTrainerInfo[0].id) { 
     console.log('Checking Id', this.state.pokemonTrainerInfo[0].id)
     return (
       <div>
         <h1>Pokemon Gym Leader Type Quiz</h1>
        <WelcomeList 
        nameProp={this.state.pokemonTrainerInfo} 
        /> 
        <Question content="Out of the colors listed, which color is your most preferred?" />
      </div>
     ) } else {
       return (
         <div>
      <h1>Welcome to the Pokemon Gym Leader type Quiz. Find out which pokemon type you belong in today. But first, please enter your name.</h1>
        <NameForm 
      handlePropSubmit={this.addName} 
      handleChangeProp={this.handleChangeState} 
      value={this.state.trainerList}
      
      />
      </div>
       )
       
    }
    
  // return (
  //   <div className="App">
  //     <NameForm 
  //     handlePropSubmit={this.addName} 
  //     handleChangeProp={this.handleChangeState} 
  //     value={this.state.trainerList}
      
  //     />
 
  //     <h3>Your Hogwarts name is: {this.state.trainerList}</h3>

  //     <WelcomeList 
  //     nameProp={this.state.pokemonTrainerInfo} 
  //     />
  //   </div>
  // );
   }
}

export default App;
