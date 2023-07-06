import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div>
        <button className="button is primary">Carteras</button>
        <button className="button is primary">Mochilas</button>
        <button className="button is primary">Riñoneras</button>
        <button className="button is primary">Billeteras</button>
      </div>
      <CardWidget />
    </nav>
  );
};

export default NavBar;
