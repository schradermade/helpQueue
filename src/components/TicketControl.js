import React from "react";

//import both NewTicketFrom & TicketList becuase they are children of TicketControl
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  
  constructor(props)  {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  
  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }
  //class components always need to have render() method
  //code inside render() method determines the content that will be rendered for user
  render()  {
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.formVisibleOnPage) {         // if formVisibleOnPage is True
      currentlyVisibleState = <NewTicketForm /> // then, show NewTicketForm
    } else  {                                   // if formVisibleOnPage is False
      currentlyVisibleState = <TicketList />    // then, show TicketList
      addTicketButton = <button onClick={this.handleClick}>Add ticket</button>
    }
    return  (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
  }

}

export default TicketControl;