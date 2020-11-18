import React from 'react';
import { Card, Grid, Row, Column } from 'react-bootstrap';

function Saturday (){
  return (
    <React.Fragment>
      <div className="col-md-2 scheduleCard">
        <Card>
          <Card.Body>
            <Card.Title><h1>Saturday</h1></Card.Title>
            <Card.Title><h1>Beaverton</h1></Card.Title>
            <Card.Text>
              10am - 3pm
            </Card.Text>
            <Card.Text>
              Booth: 9G
            </Card.Text>    
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Saturday;