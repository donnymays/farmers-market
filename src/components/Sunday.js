import React from 'react';
import { Card, Grid, Row, Column } from 'react-bootstrap';

function Sunday (){
  return (
    <React.Fragment>
      <div className="col-md-2 scheduleCard">
        <Card>
          <Card.Body>
            <Card.Title><h1>Sunday</h1></Card.Title>
            <Card.Title><h1>Lents International</h1></Card.Title>
            <Card.Text>
              9am - 2pm
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

export default Sunday;