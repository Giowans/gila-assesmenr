import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import GilaLogo from "../../assets/gila-logo.png";
import Toggle from "../Toggle";

import "./Navbar.css";
const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar__container">
      <img src={GilaLogo} alt="Gila Software Logo" width={140} height={55} />
      <Toggle isChecked={theme === 'dark'} handleChange={toggleTheme} />
    </div>
  );
}

export default Navbar;