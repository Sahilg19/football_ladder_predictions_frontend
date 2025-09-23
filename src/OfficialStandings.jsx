// src/components/OfficialStandings.js
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
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// This component now receives the 'standings' as a prop
export default function OfficialStandings({ standings }) {
  return (
    <TableContainer
        component={Paper}
        sx={{
            width: "100%",
            overflowX: "auto",   // scroll horizontally if too many columns
        }}
    >
      <Table sx={{ width: '100%', tableLayout: 'fixed' }} aria-label="official standings table">
        <TableHead>
        <TableRow>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell align="left">Team</StyledTableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {standings.map((row) => (
            <StyledTableRow key={row.position}>
            <StyledTableCell component="th" scope="row">
                {row.position}
            </StyledTableCell>
            <StyledTableCell
                align="left"
                sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            >
                {row.team}
            </StyledTableCell>
            </StyledTableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
  );
}