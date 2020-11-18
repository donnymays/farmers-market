import React from "react";
import { Jumbotron } from 'react-bootstrap';

function Header(){
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <h1>Avery's Farm</h1>
        <p>Eat your veggies. Or else...</p>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;