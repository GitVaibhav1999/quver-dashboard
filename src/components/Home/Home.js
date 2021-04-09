import { Box, Button, ButtonBase, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Upcoming from '../Upcoming/Upcoming'
import Papers from './Papers';
const queryString = require('query-string');

const useStyles=makeStyles({
    root:{
        backgroundColor:'#7386d5',
        margin:"10px",
        marginRight:'10px',
        color:'white',
        '&:hover':
        {
            backgroundColor:' #9f80ff'
        }
        
    }
})




export default function Home(props) {
    const [data, setdata] = useState([]);
    const parsed = queryString.parse(props.search);
    const coachingid=parsed.id;
    const[DPP,setdpp]=useState([]);
    
    const classes=useStyles();
    
    const BASE_URL = 'http://52.66.239.92/api/coaching/getQuestionByCoaching?CoachingID=126';
    useEffect(() => {
        axios.get(BASE_URL).then(
            (res)=>{
                setdata(res.data);     
            }
        )
    }
    ,[]); 
    let filterdpp=()=>
    {
        const dpp=data.filter((dppdata)=>dppdata.IsDPP.includes("n"));
        setdpp(dpp)
    }
    let filterPapers=()=>
    {
        const dpp=data.filter((dppdata)=>dppdata.IsDPP.includes("N"));
        setdpp(dpp)
    }
    return (
        <Box marginLeft={5} >
            <Grid container>             
                <Grid list >
                    <Typography variant="h4">Welcome to dashboard,User!</Typography>
                </Grid>            
                <Grid list sm={12}>
                    <Card>
                    <Grid container justify="center">
                       <Grid list sm={4} md={4} lg={2} >                    
                       </Grid>
                       <Grid list sm={4} md={3} lg={2}>
                        <Button  classes={{root:classes.root}}  variant="contained" onClick={filterPapers} >Papers</Button>
                        <Button  classes={{root:classes.root}}  variant="contained" onClick={filterdpp}>DPP</Button>                    
                       </Grid>
                       <Grid list sm={2}>
                       </Grid>
                    </Grid>
                    <Box m={2}>
                    <Typography variant="h5"> Recently made papers</Typography>  
                    </Box>
                    <Box m={2}>
                    <Grid container>
                        <Papers data={DPP}/>
                    </Grid> 
                    </Box>                                      
                    </Card>
                </Grid>
            </Grid>
            </Box>                        
    )
}


