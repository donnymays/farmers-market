import React from 'react';
import { Card, Grid, Row, Column } from 'react-bootstrap';

function Wednesday (){
  return (
    <React.Fragment>
      <div className="col-md-2 scheduleCard">
        <Card>
          <Card.Body>
            <Card.Title><h1>Wednesday</h1></Card.Title>
            <Card.Title><h1>Shemanski Park</h1></Card.Title>
            <Card.Text>
              9am - 2pm
            </Card.Text>
            <Card.Text>
              Booth: 3E
            </Card.Text>    
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Wednesday;