import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";
import HighchartsReact from "highcharts-react-official";

drilldown(Highcharts);

class Mydrilldown extends React.Component {
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
        options={{
          chart: {
            type: "pie"
          },

          series: [
            {
              events: {
                click: e => {
                  this.categoryClicked(e);
                }
              },
              data: [
                {
                  name: "Male",
                  y: 62,
                  drilldown: "Male"
                },
                {
                  name: "Female",
                  y: 52,
                  drilldown: "Female"
                }
              ]
            }
          ],
          drilldown: {
            series: [
              {
                name: "Male",
                id: "Male",
                data: [["Dept 1", 30], ["Dept 2", 32]]
              },
              {
                name: "Female",
                id: "Female",
                data: [["Dept 1", 25], ["Dept 2", 27]]
              }
            ]
          }
        }}
      />
    );
  }
}

export default Mydrilldown;