import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import zIndex from "@mui/material/styles/zIndex";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(control_change, status, date, person){
  this.control_change = control_change;
  this.status = status;
  this.date = date;
  this.person = person;
}

// const rows = [
//   createData("Backwashing", 6.0, 24, "Ben"),
//   createData("Tolerances", 9.0, 37, "Bill"),
//   createData("Lights", 16.0, 24, "Natalie"),
//   createData("Backwashing", 3.7, 67, "Lester"),
//   createData("Fish Feeder", 16.0, 49, "Bill"),
// ];

const rows = [
  new createData("Backwashing", 6.0, 24, "Ben"),
  new createData("Tolerances", 9.0, 37, "Bill"),
  new createData("Lights", 16.0, 24, "Natalie"),
  new createData("Backwashing", 3.7, 67, "Lester"),
  new createData("Fish Feeder", 16.0, 49, "Bill"),
];

export default function CustomizedTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Control Change</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Person&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.control_change}
              </StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.person}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
