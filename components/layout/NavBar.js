import Link from 'next/link';

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/"><a>Home</a></Link>
      </li>
      <li>
        <Link href="/create"><a>Add a Book</a></Link>
      </li>
      <li>
        <Link href="/about"><a>About</a></Link>
      </li>
      <li>
        <Link href="/signin"><a>Sign In</a></Link>
      </li>
      <li>
        <Link href="/signup"><a>Sign Up</a></Link>
      </li>
    </ul>
  )
}
