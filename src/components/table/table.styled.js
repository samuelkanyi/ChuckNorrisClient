import styled from "styled-components";

export const Table = styled.table`
  width: 30%;
  height: 100vh;
  border: 1px solid black;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: scroll & thead tr {
    background-color: #0f202d;
    color: #ffffff;
    text-align: left;
  }

  & td,
  & th {
    padding: 12px 15px;
  }

  & tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  & tbody tr:hover {
    border-bottom: 1px solid #dddddd;
  }

  & tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  & tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;
