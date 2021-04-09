import { Box, CssBaseline, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { BrowserRouter, Link ,Route, Switch} from 'react-router-dom'
import { Button } from 'reactstrap'
import Topbar from '../content/Topbar';
import "./Coachings.css";

const useStyles= makeStyles({
    root:{
       backgroundColor:'black'
    }
})

export default function Coachings(props) {
    const classes=useStyles();
    console.log(props);
    const [data, setdata] = useState([]);

    const BASE_URL = 'http://52.66.239.92/api/coaching/getCoachingName?TeacherID=58';
    useEffect(() => {
        axios.get(BASE_URL).then(
            (res)=>{
                setdata(res.data)
                console.log(res.data);
            }          
        )        
        .catch(
            (err)=>
            {
                <h1>{err}</h1>
            }
        )
    }
    , []);


    return (
        <div>
        
         <Topbar/>
        
         <div >
       
            <Box m={0.5}>
            <Grid container>
                <Grid item xs={12} >
                    <TableContainer component={Paper}>
                        <Table id="split_table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Coachings</TableCell>
                                    <TableCell >Users</TableCell>
                                </TableRow>                                  
                            </TableHead>
                            <TableBody>                         
                                    {data.map( (item) => (
                                    <TableRow >
                                        <Link to={`/dashboard/home?CoachingID=${item.CoachingName}`}><TableCell>{item.CoachingName}</TableCell><br/></Link>  
                                        
                                    </TableRow>))}                            
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>    
            </Grid>
            </Box>
            </div>   
             
         </div>
        
//  <div className="m-5">
// <h1 className="display-5  ">Courses</h1>
//   <Table  className="Table" borderless striped  hover  style={{borderBottom: "2px solid 	#DCDCDC "}} >
//      <thead>
//        <tr style={{borderBottom: "2px solid 	#DCDCDC "}}>
//            <th>Coachings</th>
//            <th>Colomn 1</th>
//            <th>Username</th>
//        </tr>             
//      </thead>            
//        {
//            data.map((data)=>
//            {
//                return(
//                     <>
//                        <tbody  >
//                            <tr >
//                                <td><Link to={`/dashboard/home?CoachingID=${data.CoachingID}`}>{data.CoachingName}<br/></Link></td>
//                                <td>Colomn 1</td>
//                                <td>@user </td>
//                            </tr>    
//                        </tbody>
//                    </>                           
//                )
//            })
//        }           
//    </Table>
//   </div> 
    )
}

