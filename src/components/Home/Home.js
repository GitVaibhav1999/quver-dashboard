import { Box, Button, ButtonBase, Card, CardContent, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Upcoming from '../Upcoming/Upcoming'
import NewPaper from './NewPaper';
import Papers from './Papers';
import Thumbnail from './Thumbnail';
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
    const [papers, setpapers] = useState([])
    
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
    useEffect(() => {
        filterdpp();
        filterPapers();
        console.log(data);
        
      
    }, [])
    
    let filterdpp=()=>
    {
        const dpp=data.filter((dppdata)=>dppdata.IsDPP.includes("n"));
        setdpp(dpp);
    }
    let filterPapers=()=>
    {
        const papers=data.filter((dppdata)=>dppdata.IsDPP.includes("n"));
        setpapers(papers);
    }
    return (
        <Box marginLeft={5} >
            <Grid container>             
                <Grid list >
                    <Typography variant="h4">Welcome to dashboard,User!</Typography>
                </Grid>                     
            </Grid>
            <Box >
                <Grid container >               
                    <Grid item xs={12} sm={6}>
                        <NewPaper/>
                    </Grid>                  
                    <Grid item xs={12} sm={6}>
                       <Thumbnail/>
                    </Grid>                               
                </Grid>          
            <Grid container >                                                                   
                    <Grid item xs={12} sm={6}>
                        <Box m={2}>
                            <Card>
                                <Papers title="Recently made Papers" data={papers}/>                            
                            </Card>                                                
                        </Box>
                    </Grid>                                 
                    <Grid item xs={12} sm={6}>
                        <Box m={2}>
                            <Card>
                                <Papers title="Recently made DPP" data={DPP}/>                            
                            </Card>                                                
                        </Box>
                    </Grid>                                
                </Grid>          
            </Box>  
        </Box>                        
    )
}



