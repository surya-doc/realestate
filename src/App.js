import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import usa from './Data/Data';

function App() {
  function filterUSA(searchTerm) {
    return usa.filter(function (location) {
        return location.address.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

const a = filterUSA('los');
console.log(a);
  return (
    <div className="App" style={{backgroundColor: "#f8f7fd"}}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
