import { Link, useParams } from "react-router-dom";
import carteras from "../data";

function Carteras() {
  return (
    <div>
      <h2>Carteras</h2>
      <div>
        {carteras.map((carteras) => {
          return (
            <article key={carteras.id}>
              <h5>{carteras.title}</h5>
              <img src={carteras.image} />
              <Link to={"/carteras/${carteras.id}"}> Mas Info</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Carteras;
