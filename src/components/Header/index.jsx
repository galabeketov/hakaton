import React from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <section>
        <ul>
          <li>
            <h2>
              {" "}
              <Link to={"/"}>AIM</Link>
            </h2>
          </li>

          <li>
            <Link to={"/form"}>Hizmatlar</Link>
          </li>
          <li>Aloqa</li>
          <li>Profile</li>
        </ul>
      </section>
    </div>
  );
}

export default Header;
