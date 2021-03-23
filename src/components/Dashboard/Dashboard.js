import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Card, CardBody,Button, CardText,CardTitle ,CardSubtitle, CardImg} from 'reactstrap'
import Upcoming from '../Upcoming/Upcoming'
import './Dashboard.css'


export default function Dashboard() {
    const [data, setdata] = useState([]);

    const BASE_URL = 'http://localhost:3000/data/';
    useEffect(() => {
        axios.get(BASE_URL+'?_id=1').then(
            (res)=>{
                setdata(res.data);              
            }
        )
    }
    , []);

    function handleremove(index)
    {
       setdata([
           ...data.slice(0,index),
           ...data.slice(index+1,data.length)
       ])

    }
    const handleclick=(e)=>{
        console.log(e.target.id);
    }
    return (
        <div>
            <div className="row">
                <Card className="m-2">
                    <h5  className="m-2">Recently made papers</h5>
                        <div className="row m-3">
                         {
                        data.map((data,index)=>
                        {
                        const {id,title,batch,questions,answers}=data;
                        return(
                            <div className="col-sm-12 col-md-6 col-lg-3 mt-3">
                            <Card key={id}>
                                <CardBody>
                                   <CardTitle tag="h5">{title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{batch}</CardSubtitle>
                                   </CardBody>
                                <CardImg className="cardImg" handleremove={handleremove} src={questions} index={index} key={index}></CardImg>                            
                                <CardBody>
                                <Button id={id}  onClick={handleclick} className="btn-info m-1" size="sm">Download question</Button>
                                <span/>
                                <Button className="btn-info" size="sm">Download key</Button>
                                </CardBody>
                            </Card>
                    </div>
                        )})}                                            
                    </div>                   
                </Card>    
            </div>
              
        
                      
        </div>
    )
}


