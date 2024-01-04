import Link from "next/link";
import '../../app/globals.css'
const TheHeader = () => {
    return (
      <header >
        <Link className="link" href='/'>Home</Link>
        <Link className="link" href='/blog'>Blog</Link>
        <Link className="link" href='/about'>About</Link>
      </header>
    )
  }
  
  export {TheHeader};