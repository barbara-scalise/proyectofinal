import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Bienvenido</h2>
      <Outlet />
    </div>
  );
}

export default Home;
