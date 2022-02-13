import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          <h2>Evento</h2>
        </a>
      </Link>
    </header>
  );
}

export default Header;
