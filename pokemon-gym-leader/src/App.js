import React from 'react';
import WelcomeList from './components/Welcome/WelcomeList';
import NameForm from  "./components/Welcome/NameForm";
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';

import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      pokemonTrainerInfo: [
        {
        trainer: '',
        id: ''
        }
      ],
      trainerList: [],
      // pokemonQuiz: {
      //   counter: 0,
      //   questionId: 1,
      //   question: ''
      // }
    }
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

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

  handleAnswerSelected = e => {
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        // do nothing for now
      }
  }

  setUserAnswer(answer) {
    this.setState((prevState) => ({
       answersCount: {
         ...prevState.answersCount,
         [answer]: (prevState.answersCount[answer] || 0) + 1
       },
       answer: answer
    }))
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  render(){
   if (this.state.pokemonTrainerInfo[0].id) { 
     console.log('Checking Id', this.state.pokemonTrainerInfo[0].id)
     return (
       <div>
         <h1>Pokemon Gym Leader Type Quiz</h1>
        <WelcomeList 
        nameProp={this.state.pokemonTrainerInfo} 
        /> 
        <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
    />
        {/* <Question content="Out of the colors listed, which color is your most preferred?" /> */}
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
