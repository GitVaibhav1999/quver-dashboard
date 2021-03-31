import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link ,Route, Switch} from 'react-router-dom'
import { Button } from 'reactstrap'
import Topbar from '../content/Topbar';

export default function Coachings(props) {
    console.log(props);
    const [data, setdata] = useState([]);

    const BASE_URL = 'http://localhost:3000/data/';
    useEffect(() => {
        axios.get(BASE_URL).then(
            (res)=>{
                setdata(res.data)
                 console.log(Object.keys(res.data));
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

    const coachings=Object.keys(data);

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
         <div className="">
         <Topbar/>
        <h1 className="display-6"> Select courses here</h1>
        <ul>
            {
                coachings.map((data)=>
                {
                    return(
                        <Link to={`/dashboard/home?id=${data}`}>{data}<br/></Link>
                    )
                })
            }
            


        </ul>

        </div>        
        </div>
    )
}
