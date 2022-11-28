import Navbar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola a todos" />
    </div>
  );
}

export default App;
