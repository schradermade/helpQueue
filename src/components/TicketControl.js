import React from "react";

//import both NewTicketFrom & TicketList becuase they are children of TicketControl
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  
  constructor(props)  {
    super(props);
    this.state = {};
  }

  render()  {
    return  (
      <React.Fragment>
      </React.Fragment>
    );
  }

}

export default TicketControl;