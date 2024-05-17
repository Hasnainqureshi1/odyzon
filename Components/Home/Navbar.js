import Link from "next/link";

const Navbar = () => {
  return (
    <div className="header">
      <Link href="#top" id="logo">
        Odyzon
      </Link>
      <div className="menu">
        <Link href="#feed" id="">
          Feed
        </Link>
        <Link href="#discography" id="">
          Discography
        </Link>
        <Link href="#events" id="">
          Events
        </Link>
        <Link href="#about" id="">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
