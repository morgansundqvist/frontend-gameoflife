import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { apiSetCellState } from "../service/game.service";

type Props = {
  board: boolean[][] | null;
  refreshBoard: () => void;
};

function GameGridComponent({ board, refreshBoard }: Props) {
  const handleButtonToggle = (
    e: any,
    rowNr: number,
    columnNr: number,
    currentState: boolean
  ) => {
    e.preventDefault();

    apiSetCellState(rowNr, columnNr, !currentState).then((data) => {
      refreshBoard();
    });
  };

  const getColor = (state: boolean) => {
    if (state) return "grey";
    return "white";
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {board &&
              board.map((row, index) => (
                <TableRow key={index.toString()}>
                  {row.map((column, colIndex) => (
                    <TableCell
                      key={index.toString() + colIndex.toString()}
                      onClick={(e) =>
                        handleButtonToggle(e, index, colIndex, column)
                      }
                      sx={{ bgcolor: getColor(column) }}
                    >
                      {column.toString()}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default GameGridComponent;
