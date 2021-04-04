import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { BrowserRouter, Link ,Route, Switch} from 'react-router-dom'
import { Button } from 'reactstrap'
import Topbar from '../content/Topbar';
import "./Coachings.css"

export default function Coachings(props) {
    console.log(props);
    const [data, setdata] = useState([]);

    const BASE_URL = 'http://52.66.239.92/api/coaching/fetchCoaching?TeacherID=58';
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
         <Topbar/>   
         <div className="m-5">
         <h1 className="display-5  ">Courses</h1>
           <Table  className="Table" borderless striped  hover  style={{borderBottom: "2px solid 	#DCDCDC "}} >
              <thead>
                <tr style={{borderBottom: "2px solid 	#DCDCDC "}}>
                    <th>Coachings</th>
                    <th>Colomn 1</th>
                    <th>Username</th>
                </tr>             
              </thead>            
                {
                    data.map((data)=>
                    {
                        return(
                             <>
                                <tbody  >
                                    <tr >
                                        <td><Link to={`/dashboard/home?CoachingID=${data.CoachingID}`}>{data.CoachingName}<br/></Link></td>
                                        <td>Colomn 1</td>
                                        <td>@user </td>
                                    </tr>    
                                </tbody>
                            </>                           
                        )
                    })
                }           
            </Table>
           </div>        
         </div>
    )
}
