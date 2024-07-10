
import './App.css';
import SmCard from './Components/Public/SmCard/SmCard';
import ChartCard from './Components/Public/ChartCard/ChartCard';
import Footer from './Components/Public/Footer/Footer'

function App() {
  const data = [
    ['Task', 'No'],
    ['Approved', 21],
    ['Pending', 4],
    ['Rejected', 2]
  ];

  return (
    <div className="App">
      <SmCard width='160px' height='160px' topic='Sample Card' value='20' />
      <ChartCard width="250px" height="300px" topic="Request Status" dataArray={data} />
      <Footer/>
    </div>
  );
}

export default App;
