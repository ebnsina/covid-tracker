import Link from "next/link";

function Header() {
  return (
    <header className="bg-indigo-500 text-white absolute top-0 w-full py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-semibold text-white">Covid Tracker</a>
        </Link>

        <nav>
          <ul className="flex space-x-8 text-white">
            <li>
              <Link href="/prevention">Prevention</Link>
            </li>
            <li>
              <Link href="/country">Countries</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
