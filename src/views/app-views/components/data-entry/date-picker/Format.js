import React, { Component } from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export class Format extends Component {
  render() {
    return (
      <div>
        <DatePicker
          defaultValue={moment("2015/01/01", dateFormat)}
          format={dateFormat}
        />
        <br />
        <DatePicker
          defaultValue={moment("01/01/2015", dateFormatList[0])}
          format={dateFormatList}
        />
        <br />
        <MonthPicker
          defaultValue={moment("2015/01", monthFormat)}
          format={monthFormat}
        />
        <br />
        <RangePicker
          defaultValue={[
            moment("2015/01/01", dateFormat),
            moment("2015/01/01", dateFormat)
          ]}
          format={dateFormat}
        />
      </div>
    );
  }
}

export default Format;
