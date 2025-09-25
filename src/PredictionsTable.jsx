// src/components/PredictionsTable.js
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function PredictionsTable({ predictions }) {
  const users = Object.keys(predictions);
  const numRows = Math.max(...users.map(user => predictions[user].length));

  return (
    <TableContainer
  component={Paper}
  sx={{
    width: "100%",
    overflowX: "auto", // 👈 enable scroll
  }}
>
  <Table
    sx={{
      tableLayout: "auto",   // 👈 natural sizing
      width: "max-content",  // 👈 force table to grow as needed
      minWidth: "100%",      // 👈 don’t collapse smaller than screen
    }}
  >
    <TableHead>
      <TableRow>
        <StyledTableCell>Rank</StyledTableCell>
        {users.map(user => (
          <StyledTableCell
            key={user}
            sx={{
              whiteSpace: "nowrap", // 👈 prevent wrapping
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {user}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {Array.from({ length: numRows }).map((_, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell>{index + 1}</StyledTableCell>
          {users.map(user => (
            <StyledTableCell
              key={user}
              sx={{
                whiteSpace: "nowrap", // 👈 prevents team names from splitting
                textAlign: "center",
              }}
            >
              {predictions[user][index] || ""}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>



  );
}
