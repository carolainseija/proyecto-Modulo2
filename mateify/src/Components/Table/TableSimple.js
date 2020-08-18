import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const TableSimple = (props) =>{
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          {props.TitleHeadTable}
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>{props.descriptionOne}</TableCell>
            <TableCell align="center">{props.descriptionTwo}</TableCell>
            <TableCell align="center">{props.descriptionThree}</TableCell>
            <TableCell align="center">{props.descriptionFour}</TableCell>
            <TableCell>
            {props.descriptionFive}
          </TableCell>
          <TableCell>{props.descriptionSix}</TableCell>
          </TableRow>
         
        </TableHead>
        <TableBody>
        {props.descriptionBodyTable}
            <TableRow >
              <TableCell component="th" scope="row">
             {PaymentResponse}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}