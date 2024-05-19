import Link from "next/link";
import { headers } from "next/headers";

const Navbar = () => {
  const headersList = headers();
  const referer = headersList.get("referer") || "";

  // Create a URL object to easily extract the pathname
  let pathname = "/";
  if (referer) {
    const url = new URL(referer);
    pathname = url.pathname;
  }

  const generateLink = (hash) => {
    // If the current page is not the home page or does not start with /
    if (pathname !== "/" && pathname !== "/#" && pathname.split('/').length > 2 || pathname.split('/').length > 1) {
      return `/#${hash}`;
    } else {
      return `#${hash}`;
    }
  };

  console.log(pathname);

  return (
    <div className="header">
      <Link href={generateLink("top")} id="logo">
        Odyzon
      </Link>
      <div className="menu">
        <Link href={generateLink("feed")} id="">
          Feed
        </Link>
        <Link href={generateLink("discography")} id="">
          Discography
        </Link>
        <Link href={generateLink("events")} id="">
          Events
        </Link>
        <Link href={generateLink("about")} id="">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
