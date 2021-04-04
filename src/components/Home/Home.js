import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Upcoming from '../Upcoming/Upcoming'
import './Dashboard.css'
import Papers from './Papers';
const queryString = require('query-string');

export default function Home(props) {
    const [data, setdata] = useState([]);
    const parsed = queryString.parse(props.search);
    const coachingid=parsed.id;
    const[DPP,setdpp]=useState([]);
 
    
    const BASE_URL = 'http://52.66.239.92/api/coaching/getQuestionByCoaching?CoachingID=126';
    useEffect(() => {
        axios.get(BASE_URL).then(
            (res)=>{
                setdata(res.data);     
            }
        )
    }
    , []);

  
    let filterdpp=()=>
    {
        const dpp=data.filter((dppdata)=>dppdata.IsDPP.includes("n"));
        setdpp(dpp)
        console.log(DPP);
    }
    return (
        <>
            <Row>
                <Card className="m-2">
                    <Row className="justify-content-center">                        
                        <Col sm={4}>
                        </Col>
                        <Col sm={12} md={4} >
                            <Button  className="mt-3 shadow" key="sample-paper" variant="info" onClick={filterdpp}   >Sample Papers</Button>
                            <Button className="ml-5 mt-3 shadow" key="dpp" variant="info" onClick={filterdpp}  > 
                              DPP                        
                            </Button>
                        </Col>
                        <Col sm={4}>
                        </Col>           
                    </Row>
                    <Row> 
                    
                    <Papers data={DPP}/>

                    </Row>
                </Card>    
            </Row>                            
        </>
    )
}


