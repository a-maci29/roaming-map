import Link from 'next/link';

export default function Navigation(){
  return(
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <li><Link href="/geospatial">Home</Link></li>
    <li>About</li>
    <li>Contact</li>
  </nav>
  )
}