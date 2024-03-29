import React from "react";
import classNames from "classnames";
import {
  InputGroup,
  DatePicker,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

import "../../assets/range-date-picker.css";

class RangeDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: undefined,
      endDate: undefined
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(value) {
    this.setState({
      ...this.state,
      ...{ startDate: new Date(value) }
    });
  }

  handleEndDateChange(value) {
    this.setState({
      ...this.state,
      ...{ endDate: new Date(value) }
    });
  }

  render() {
    const { className } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");

    return (
      <button style={{ background: 'none', border: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 9.5C1.75 9.08579 2.08579 8.75 2.5 8.75H21.5C21.9142 8.75 22.25 9.08579 22.25 9.5V20C22.25 20.9665 21.4665 21.75 20.5 21.75H3.5C2.53351 21.75 1.75 20.9665 1.75 20V9.5ZM3.25 10.25V20C3.25 20.1381 3.36192 20.25 3.5 20.25H20.5C20.6381 20.25 20.75 20.1381 20.75 20V10.25H3.25Z" fill="#7E838E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 4.25C3.36193 4.25 3.25 4.36193 3.25 4.5V8.75H20.75V4.5C20.75 4.36192 20.6381 4.25 20.5 4.25H3.5ZM1.75 4.5C1.75 3.5335 2.5335 2.75 3.5 2.75H20.5C21.4665 2.75 22.25 3.53351 22.25 4.5V9.5C22.25 9.91421 21.9142 10.25 21.5 10.25H2.5C2.08579 10.25 1.75 9.91421 1.75 9.5V4.5Z" fill="#7E838E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V6C8.75 6.41421 8.41421 6.75 8 6.75C7.58579 6.75 7.25 6.41421 7.25 6V2C7.25 1.58579 7.58579 1.25 8 1.25Z" fill="#7E838E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V6C16.75 6.41421 16.4142 6.75 16 6.75C15.5858 6.75 15.25 6.41421 15.25 6V2C15.25 1.58579 15.5858 1.25 16 1.25Z" fill="#7E838E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 9.5H21.5V20C21.5 20.5523 21.0523 21 20.5 21H3.5C2.94771 21 2.5 20.5523 2.5 20V9.5ZM13.25 17C13.25 16.5858 13.5858 16.25 14 16.25H17C17.4142 16.25 17.75 16.5858 17.75 17C17.75 17.4142 17.4142 17.75 17 17.75H14C13.5858 17.75 13.25 17.4142 13.25 17ZM7 16.25C6.58579 16.25 6.25 16.5858 6.25 17C6.25 17.4142 6.58579 17.75 7 17.75H10C10.4142 17.75 10.75 17.4142 10.75 17C10.75 16.5858 10.4142 16.25 10 16.25H7ZM13.25 13C13.25 12.5858 13.5858 12.25 14 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75H14C13.5858 13.75 13.25 13.4142 13.25 13ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H10C10.4142 13.75 10.75 13.4142 10.75 13C10.75 12.5858 10.4142 12.25 10 12.25H7Z" fill="#7E838E"/>
          </svg>
          </button>
    );
  }
}

export default RangeDatePicker;
