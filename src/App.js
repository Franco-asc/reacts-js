
import './App.css';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
    <NavBar/>
    
    <ItemsListContainer name="Bienvenidos a Barber Shop Rosario, la mejor distribuidora del pais!!!"/>
    </>
    
  );
}

export default App;
