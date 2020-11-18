import React from 'react';
import { Card, Grid, Row, Column } from 'react-bootstrap';

function Thursday (){
  return (
    <React.Fragment>
      <div className="col-md-2 scheduleCard">
        <Card>
          <Card.Body>
            <Card.Title><h1>Thursday</h1></Card.Title>
            <Card.Title><h1>Northwest Portland</h1></Card.Title>
            <Card.Text>
              10am - 2pm
            </Card.Text>
            <Card.Text>
              Booth: 6D
            </Card.Text>    
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Thursday;