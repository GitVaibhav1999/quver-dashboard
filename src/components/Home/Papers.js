import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';


export default function Papers(props) {
    const handleclick=(e)=>{
        alert(`you clicked ${e.target.key}`)
    }
 
  
    return (
        <Grid container spacing={2} >
                         {
                        props.data.map((data,index)=>                        
                        {
                        const {ID,Title,Time,Marks,NumofPaper}=data;
                        return(
                            < >
                            <Grid item xs={6} md={4} key={ID}>
                                <Card raised >
                                <CardActionArea >
                                    <CardMedia                      
                                    title={Title}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h6" component="h3">
                                        {Title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                     Time is {Time}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Marks are {Marks}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Number of papers are {NumofPaper}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={handleclick}>
                                    Download Question
                                    </Button>
                                    <Button key={ID} size="small" color="primary" onClick={handleclick}>
                                   Download Answer key
                                    </Button>
                                </CardActions>
                                </Card>
                            </Grid> 
                            </>                           
                        )}
                        )}                                           

        </Grid>
        
    )
}
