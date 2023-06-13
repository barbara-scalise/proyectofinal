import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav>
      <div>
        <button class="button is primary">carteras</button>
        <button class="button is primary">Mochilas</button>
        <button class="button is primary">Riñoneras</button>
        <button class="button is primary">Billeteras</button>
      </div>
      <CardWidget />
    </nav>
  );
};

export default NavBar;
