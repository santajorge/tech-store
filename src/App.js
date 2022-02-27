import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer'


function App() {
  return (
    <>
      <header>
        <NavBar />  
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </>
  );
}

export default App;
