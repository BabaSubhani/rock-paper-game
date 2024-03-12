// Game.js
import {Component} from 'react'
import Popup from 'reactjs-popup'
import Options from '../Options'

import {
  GameAppContainer,
  HeaderContainer,
  InformationContainer,
  Heading,
  ScoreContainer,
  ScoreText,
  ScoreHeading,
  ButtonContainer,
  Button,
  PopupImgContainer,
  PopupImg,
  ResultImgContainer,
  ResultImg,
  PlayerName,
  PlayerContainer,
  ResultOutcome,
  Container,
  PlayAgainBtn,
} from './styledComponents'

const gameStatus = {
  initial: 'INITIAL',
  result: 'RESULT',
}

class Game extends Component {
  state = {
    status: gameStatus.initial,
    userOption: null,
    score: 0,
    result: null,
    opponentChoice: null,
  }

  playAgainBtnClicked = () => {
    this.setState({
      status: gameStatus.initial,
      result: null,
      opponentChoice: null,
    })
  }

  imageClicked = id => {
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * 3)
    const user = choicesList.find(eachItem => eachItem.id === id)
    const userDetails = user
    const opponentDetails = choicesList[randomNum]

    let result = ''

    if (userDetails.id === opponentDetails.id) {
      result = 'IT IS DRAW'
      this.setState({
        status: gameStatus.result,
        userOption: id,
        result,
        opponentChoice: opponentDetails,
      })
    } else if (
      (userDetails.id === 'PAPER' && opponentDetails.id === 'ROCK') ||
      (userDetails.id === 'SCISSORS' && opponentDetails.id === 'PAPER') ||
      (userDetails.id === 'ROCK' && opponentDetails.id === 'SCISSORS')
    ) {
      result = 'YOU WON'
      this.setState(prevState => ({
        status: gameStatus.result,
        userOption: id,
        score: prevState.score + 1,
        result,
        opponentChoice: opponentDetails,
      }))
    } else {
      result = 'YOU LOSE'
      this.setState(prevState => ({
        status: gameStatus.result,
        userOption: id,
        score: prevState.score - 1,
        result,
        opponentChoice: opponentDetails,
      }))
    }
  }

  renderInitialView = () => {
    const {choicesList} = this.props
    const {score} = this.state

    return (
      <GameAppContainer>
        <HeaderContainer>
          <InformationContainer>
            <Heading>Rock</Heading>
            <Heading>Paper</Heading>
            <Heading>Scissors</Heading>
          </InformationContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreText>{score}</ScoreText>
          </ScoreContainer>
        </HeaderContainer>

        <Options choicesList={choicesList} imageClicked={this.imageClicked} />

        <ButtonContainer>
          <Popup modal trigger={<Button type="button">RULES</Button>}>
            {close => (
              <>
                <PopupImgContainer>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    close
                  </button>

                  <PopupImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupImgContainer>
              </>
            )}
          </Popup>
        </ButtonContainer>
      </GameAppContainer>
    )
  }

  renderResultView = () => {
    const {userOption, score, result, opponentChoice} = this.state
    const {choicesList} = this.props
    const user = choicesList.find(eachItem => eachItem.id === userOption)
    const userDetails = user

    return (
      <GameAppContainer>
        <HeaderContainer>
          <InformationContainer>
            <Heading>ROCK</Heading>
            <Heading>PAPER</Heading>
            <Heading>SCISSORS</Heading>
          </InformationContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreText>{score}</ScoreText>
          </ScoreContainer>
        </HeaderContainer>
        <ResultImgContainer>
          <PlayerContainer>
            <PlayerName>YOU</PlayerName>
            <ResultImg src={userDetails.imageUrl} alt="your choice" />
          </PlayerContainer>
          <PlayerContainer>
            <PlayerName>OPPONENT</PlayerName>
            <ResultImg src={opponentChoice.imageUrl} alt="opponent choice" />
          </PlayerContainer>
        </ResultImgContainer>
        <ResultOutcome>{result}</ResultOutcome>
        <Container>
          <PlayAgainBtn type="button" onClick={this.playAgainBtnClicked}>
            PLAY AGAIN
          </PlayAgainBtn>
        </Container>
        <ButtonContainer>
          <Popup modal trigger={<Button type="button">RULES</Button>}>
            {close => (
              <>
                <PopupImgContainer>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    close
                  </button>

                  <PopupImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupImgContainer>
              </>
            )}
          </Popup>
        </ButtonContainer>
      </GameAppContainer>
    )
  }

  render() {
    const {status} = this.state

    switch (status) {
      case 'INITIAL':
        return this.renderInitialView()

      case 'RESULT':
        return this.renderResultView()

      default:
        return null
    }
  }
}

export default Game
