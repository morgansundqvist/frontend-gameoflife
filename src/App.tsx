import { Button, Container, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";
import "./App.css";
import GameGridComponent from "./components/GameGrid.component";
import {
  apiGetBoard,
  apiPostNextGeneration,
  apiStartNewGame,
} from "./service/game.service";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [board, setBoard] = useState<boolean[][] | null>(null);

  const handleStartNewGame = (e: any) => {
    e.preventDefault();
    apiStartNewGame(10, 10).then((data) => {
      setIsStarted(true);
      handleRefreshBoard();
    });
  };

  const handleNextGeneration = (e: any) => {
    e.preventDefault();
    apiPostNextGeneration().then((data) => {
      handleRefreshBoard();
    });
  };

  const handleRefreshBoard = () => {
    apiGetBoard().then((data) => {
      setBoard(data.data.data);
    });
  };

  return (
    <div className="App">
      <Container component="main" maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Button onClick={handleStartNewGame}>Start new ghame</Button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            {isStarted && (
              <Item>
                <Button onClick={handleNextGeneration}>Next Generation</Button>
              </Item>
            )}
          </Grid>
          <Grid item xs={12}>
            <Item>
              {board && (
                <GameGridComponent
                  board={board}
                  refreshBoard={handleRefreshBoard}
                />
              )}
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
