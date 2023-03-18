import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiStartNewGame = (rows: number, columns: number) => {
  return axios.post(
    BASE_URL + "/new-game",
    {},
    { params: { rows: rows, columns: columns } }
  );
};
export const apiSetCellState = (
  rowNr: number,
  columnNr: number,
  state: boolean
) => {
  return axios.post(
    BASE_URL + "/set-cell-state",
    {},
    { params: { row: rowNr, column: columnNr, alive: state } }
  );
};

export const apiPostNextGeneration = () => {
  return axios.post(BASE_URL + "/transition-to-next-generation");
};

export const apiGetBoard = () => {
  return axios.get(BASE_URL + "/board");
};
