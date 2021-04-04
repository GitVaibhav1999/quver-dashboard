import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


export default function Papers(props) {
    const handleclick=(e)=>{
        alert(`paper id ${e.target.id} is selected`)
    }
 
  
    return (
        <div>
           <h5  className="m-4">Recently made papers/Home</h5>
           <div className="row m-3">
                         {
                        props.data.map((data,index)=>
                        {
                        const {ID,Title,Time,Marks,NumofPaper}=data;
                        return(
                            <div className="col-sm-12 col-md-4 " >
                            <Card key={ID} >
                                <Card.Body>
                                   <Card.Title tag="h5">{Title}</Card.Title>
                                        <Card.Subtitle tag="h6" className="mb-2 text-muted">Time is{Time}</Card.Subtitle>
                                   </Card.Body>
                                <Card.Body>
                                <Button ID={ID}  onClick={handleclick} className="btn-info m-1" size="sm">Download question</Button>
                                <span/>
                                <Button className="btn-info" size="sm">Download key</Button>
                                </Card.Body>
                            </Card>
                    </div>
                        )}
                        )}                                            
                    </div>    
        </div>
        
    )
}
