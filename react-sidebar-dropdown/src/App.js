
import './App.css';
import Mychart from './Mychart';
import Mychart1 from './Mychart1';
//import Mychart2 from './Mychart2';
//import Mychart from './Mychart';
import Mydrilldown from './Mydrilldown';
import Mydrilldown1 from './Mydrilldown1';

//import Highcharts from './Highcharts';
function App() {
  return (
    <div>
      <h1>normal chart</h1>
      <Mychart/>
      <br></br>
      <hr></hr>
      <Mychart1/>
<br></br>
<hr></hr>
      <h1>My drilldown chart</h1>
      <Mydrilldown/>
      <br></br>
<hr></hr>
      <h1>My drilldown chart1</h1>
      <Mydrilldown1/>
    </div>
  );
}

export default App;
