// styledComponents.js
import styled from 'styled-components'

export const GameAppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 10px;
  margin-bottom: 0px;
  padding-bottom: 20px;
`

export const HeaderContainer = styled.div`
  width: 100%;
  border: 3px solid #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  padding: 15px;
`

export const InformationContainer = styled.div``

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 130px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const ScoreHeading = styled.p`
  font-family: 'Bree serif';
  color: #222222;
  padding-bottom: 0px;
  margin: 0px;
  font-size: 29px;
`

export const ScoreText = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
  font-size: 50px;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 30px;
`

export const Button = styled.button`
  margin: 0px;
  padding: 15px;
  border: 0px solid;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  font-family: 'Bree serif';
`

export const PopupImgContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const PopupImg = styled.img`
  height: 250px;
  margin-top: 8px;
`

export const ResultImgContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
`

export const ResultImg = styled.img`
  height: 170px;
  text-align: center;
`

export const PlayerName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultOutcome = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
  font-size: 35px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const PlayAgainBtn = styled.button`
  padding: 10px;
  font-family: 'Roboto';
`
