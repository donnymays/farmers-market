import React from 'react';
import { Card, Grid, Row, Column } from 'react-bootstrap';

function Tuesday (){
  return (
    <React.Fragment>
      <div className="col-md-2 scheduleCard">
        <Card>
          <Card.Body>
            <Card.Title><h1>Tuesday</h1></Card.Title>
            <Card.Title><h1>Hillsboro</h1></Card.Title>
            <Card.Text>
              9am - 2pm
            </Card.Text>
            <Card.Text>
              Booth: 1F
            </Card.Text>    
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Tuesday;