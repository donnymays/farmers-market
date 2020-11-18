import React, { Component } from 'react';
import MarketSchedule from './MarketSchedule'
import MarketInfo from './MarketInfo'

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scheduleDisplayed:false
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      scheduleDisplayed: !prevState.scheduleDisplayed
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.scheduleDisplayed) {
      currentlyVisibleState = <MarketSchedule />;
      buttonText = "Back to Info";
    } else {
      currentlyVisibleState = <MarketInfo />;
      buttonText = "View the Sched"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MarketControl;