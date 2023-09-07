import './App.css';
import data from './data';
import CardList from './CardList';

console.log(<CardList heroData={data} />);

function App() {
  return (
    <CardList heroData={data} />
  )
}

export default App;
