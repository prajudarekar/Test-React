import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";

drilldown(Highcharts);

class Mydrilldown1 extends React.Component {
  constructor(props) {
    super(props);
    this.allowChartUpdate = true;
    this.state = {};
  }
  componentDidMount() {
    const chart = this.refs.chartComponent.chart;
  }

  categoryClicked() {
    this.allowChartUpdate = false;
    this.setState({
      value: 2
    });
  }

  render() {
    return (
      <HighchartsReact
        allowChartUpdate={this.allowChartUpdate}
        ref={"chartComponent"}
        highcharts={Highcharts}
        
      />
    );
  }
}

export default Mydrilldown1;