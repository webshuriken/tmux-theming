import Link from 'next/link';


export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-row justify-between gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <Link href="/themes">Themes</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}