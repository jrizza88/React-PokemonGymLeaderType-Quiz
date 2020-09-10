import React from 'react';
import WelcomeList from './components/Welcome/WelcomeList';
import NameForm from  "./components/Welcome/NameForm";
import Quiz from './components/Quiz';
import Result from './components/Result';
import quizQuestions from './api/quizQuestions';
import styled from "styled-components";
import gymleaders from "./images/pokemon-gym-leaders.jpg"


import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      questionImage: '',
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
    }
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  
  
    this.setState({
      question: quizQuestions[0].question,
      questionImage: quizQuestions[0].image,
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
        setTimeout(() => this.setResults(this.getResults()), 300);
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
      questionImage: quizQuestions[counter].image,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      imageQuestion={this.state.questionImage}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  
  renderResult() {
    return (
      <Result result={this.state.result} />
    );
  }



  render(){
   if (this.state.pokemonTrainerInfo[0].id) { 
     console.log('Checking Id', this.state.pokemonTrainerInfo[0].id)
     return (
       <AppContainer>
         <h1>Pokemon Gym Leader Type Quiz</h1>
        <WelcomeList 
        nameProp={this.state.pokemonTrainerInfo} 
        /> 
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </AppContainer>
     ) } else {
       return (
         <AppContainer>
          <h1>Pokemon Gym Leader Type Quiz</h1>
          <GymPhoto src={gymleaders} />
      <QuizMessage>Welcome to the Pokemon Gym Leader type Quiz. Find out which pokemon type you belong in today. But first, please enter your name.</QuizMessage>
        <NameForm 
      handlePropSubmit={this.addName} 
      handleChangeProp={this.handleChangeState} 
      value={this.state.trainerList}
      
      />
      </AppContainer>
       )
       
    }
    

   }
}

const AppContainer = styled.section`
display: flex;
flex-direction: column;
background: whitesmoke;
justify-content: space-between;
align-items: center;
max-width: 1200px;
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
margin-top: 20px;
`

const QuizMessage = styled.div`
display: flex;
font-size: 1.2rem;
max-width: 600px;
text-align: center;
font-weight: 500;
align-items: center;
justify-content: center;
padding-bottom: 20px;
background: lightcoral;
margin: 20px 0;
padding: 20px 100px;
`

const GymPhoto = styled.img`
width: 800px;


`


export default App;
