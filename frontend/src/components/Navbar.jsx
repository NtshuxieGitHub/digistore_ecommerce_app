import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { navLinks } from "../constants";

const Navbar = ({ ContainerStyles }) => {
  return (
    <nav className={`${ContainerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};
Navbar.propTypes = {
  ContainerStyles: PropTypes.string.isRequired,
};

export default Navbar;
