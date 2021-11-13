import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Ofertas de trabajo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/users"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>

            {currentUser && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">Hola {currentUser?.name}</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
