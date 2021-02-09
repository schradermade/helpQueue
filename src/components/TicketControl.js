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
  
  // this method is called when 'Add ticket' is clicked
  handleClick = () => {
    // when clicked, formVisibleOnPage state is changed to 'true'
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  //class components always need to have render() method
  //code inside render() method determines the content that will be rendered for user
  render()  {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {         // if formVisibleOnPage is True
      currentlyVisibleState = <NewTicketForm /> // then, show NewTicketForm
      buttonText = "Return to Ticket List";
    } else  {                                   // if formVisibleOnPage is False
      currentlyVisibleState = <TicketList />    // then, show TicketList
      buttonText = "Add Ticket";
    }
    return  (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;