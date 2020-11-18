import React from "react";
import Header from "./Header"
import MarketControl from "./MarketControl";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <Header />
      <MarketControl />
    </React.Fragment>
  );
}

export default App;