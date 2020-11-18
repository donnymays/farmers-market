import React from 'react';
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'

 class MarketSchedule extends React.Component {
    
   constructor(props) {
      super(props);
      this.state = {
         mondayDisplayed:false,
         tuesdayDisplayed:false,
         wednesdayDisplayed:false,
         thursdayDisplayed:false,
         fridayDisplayed:false,
         saturdayDisplayed:false,
         sundayDisplayed:false
      };
   }

   mondayClick = () => {
      this.setState(prevState => ({
         mondayDisplayed: !prevState.mondayDisplayed
      }));
   }
   tuesdayClick = () => {
      this.setState(prevState => ({
         tuesdayDisplayed: !prevState.tuesdayDisplayed
      }));
   }
   wednesdayClick = () => {
      this.setState(prevState => ({
         wednesdayDisplayed: !prevState.wednesdayDisplayed
      }));
   }
   thursdayClick = () => {
      this.setState(prevState => ({
         thursdayDisplayed: !prevState.thursdayDisplayed
      }));
   }
   fridayClick = () => {
      this.setState(prevState => ({
         fridayDisplayed: !prevState.fridayDisplayed
      }));
   }
   saturdayClick = () => {
      this.setState(prevState => ({
         saturdayDisplayed: !prevState.saturdayDisplayed
      }));
   }
   sundayClick = () => {
      this.setState(prevState => ({
         sundayDisplayed: !prevState.sundayDisplayed
      }));
   }

   render() {
      let currentVisibleDay = null;
      if (this.state.mondayDisplayed) {
         currentVisibleDay = <Monday />;
      } else if (this.state.tuesdayDisplayed) {
         currentVisibleDay = <Tuesday />;
      } else if (this.state.wednesdayDisplayed) {
         currentVisibleDay = <Wednesday />;
      } else if (this.state.thursdayDisplayed) {
         currentVisibleDay = <Thursday />;
      } else if (this.state.fridayDisplayed) {
         currentVisibleDay = <Friday />;
      } else if (this.state.saturdayDisplayed) {
         currentVisibleDay = <Saturday />;
      } else {
         currentVisibleDay = <Sunday />;
      }
      return (
         <React.Fragment>
            {currentVisibleDay}
            <button onClick={this.mondayClick}>Monday</button>
            <button onClick={this.tuesdayClick}>Tuesday</button>
            <button onClick={this.wednesdayClick}>Wednesday</button>
            <button onClick={this.thursdayClick}>Thursday</button>
            <button onClick={this.fridayClick}>Friday</button>
            <button onClick={this.saturdayClick}>Saturday</button>
            <button onClick={this.sundayClick}>Sunday</button>
         </React.Fragment>
      )
   }
}

export default MarketSchedule;