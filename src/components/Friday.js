import React from 'react';
import { Card, Grid, Row, Column } from 'react-bootstrap';

function Friday (){
  return (
    <React.Fragment>
      <div className="col-md-2 scheduleCard">
        <Card>
          <Card.Body>
            <Card.Title><h1>Friday</h1></Card.Title>
            <Card.Title><h1>Pioneer Courthouse Square</h1></Card.Title>
            <Card.Text>
              10am - 2pm
            </Card.Text>
            <Card.Text>
              Booth: 4A
            </Card.Text>    
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Friday;