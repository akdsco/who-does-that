import React from "react";
import { AppContainer, GameContainer } from "./App.style";
import { ScoreBoard } from "./containers/ScoreBoard/ScoreBoard";
import { ChoiceContainer } from "./containers/ChoiceContainer/ChoiceContainer";
import { RulesButton } from "./components/RulesButton/RulesButton";

export default function App() {
  return (
    <AppContainer className="App">
      <GameContainer>
        <ScoreBoard />
        <ChoiceContainer />
        <RulesButton />
      </GameContainer>
    </AppContainer>
  );
}
