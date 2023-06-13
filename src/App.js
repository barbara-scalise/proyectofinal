import "./App.css";
import NavBar from "./components/NavBar/NavBar";
//import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="SC" />
    </div>
  );
}

export default App;
