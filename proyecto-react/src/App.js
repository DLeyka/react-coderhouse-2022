import Navbar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Desde aquí se crea el enrutamiento (Navegación)
function App() {
  return (
    
    <BrowserRouter>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/category" element={<ItemListContainer />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={ <h1>Aquí se muestra el carrito</h1> } />

        <Route path="*" element={ <h1>Página no encontrada error 404</h1> } />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
