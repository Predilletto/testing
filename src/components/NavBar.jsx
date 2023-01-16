import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to={"/"}> Login </Link>
          </li>
          <li>
            <Link to={"/dogs"}>Dogs </Link>
          </li>
          <li>
            <Link to={"/cats"}>Cats</Link>
          </li>
          <li>
            <Link to={"/users"}>Users </Link>
          </li>
          <li>
            <Link to={"/clientes"}>Clientes </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
