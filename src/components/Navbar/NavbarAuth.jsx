import Navbar from "./Navbar";
import logo from "../../assets/icons/logo.png";

function NavbarAuth() {
  return (
    <Navbar>
      <img
        src={logo}
        alt="logo vidio belajar"
        className="w-40 md:w-60 max-h-14 mx-10 md:mx-20"
      />
    </Navbar>
  );
}

export default NavbarAuth;
