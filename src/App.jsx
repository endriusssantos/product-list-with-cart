import "./App.css";
import CartContainer from "./components/CartContainer/CartContainer";
import DessertsContainer from "./components/DessertsContainer/DessertsContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <MainContainer>
        <DessertsContainer />
        <CartContainer />
      </MainContainer>
    </CartProvider>
  );
}

export default App;
