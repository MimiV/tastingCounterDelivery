import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./CustomerInfo.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
    table: {
      minWidth: 100,
      width:400,
      align:"center",
      marginBottom:"40px",
      backgroundColor: "rgba(255, 99, 71, 0)",
    },
    tableCell:{
        fontSize:16,
        fontWeight:"bold",
    }
    
  });


function CustomerInfo({
         topLine,customerName,address,type,phoneNumber
         
         
}) {
    const classes = useStyles();
    return (
        <div className="Customer_info_container">    
       
          <TableContainer> 
          <hr className="__colorgraph"></hr>    
            <Table className={classes.table}>
              <TableHead>
                <TableRow hover
                className={classes.tableRow}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row">
                        Delivery #</TableCell>
                  <TableCell className={classes.tableCell}>{topLine}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>Name</TableCell>
                  <TableCell align="left" className={classes.tableCell}>{customerName}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>Address</TableCell>
                  <TableCell align="left" className={classes.tableCell}>{address}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>Type</TableCell>
                  <TableCell align="left" className={classes.tableCell}>{type}</TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>Phone Number</TableCell>
                  <TableCell align="left" className={classes.tableCell}>{phoneNumber}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
    
    )
}
export default CustomerInfo
