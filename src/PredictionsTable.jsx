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
    overflowX: "auto", // scrolls horizontally if needed
  }}
>
  <Table
    sx={{
      minWidth: users.length * 140 + 50, // each user column ~140px + rank
    }}
  >
    <TableHead>
      <TableRow>
        <StyledTableCell sx={{ minWidth: 50 }}>Rank</StyledTableCell>
        {users.map(user => (
          <StyledTableCell
            key={user}
            sx={{
              minWidth: 100,  // ensures columns don’t collapse
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {user}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {Array.from({ length: Math.max(...users.map(u => predictions[u].length)) }).map((_, index) => (
        <StyledTableRow key={index}>
          <StyledTableCell sx={{ minWidth: 50 }}>{index + 1}</StyledTableCell>
          {users.map(user => (
            <StyledTableCell
              key={user}
              sx={{ minWidth: 100, whiteSpace: 'nowrap', textAlign: 'center' }}
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
