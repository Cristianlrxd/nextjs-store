import Link from "next/link";

export const Header = () => {
    
    return(
        <header>
          <nav>
            <ul>
              <Link href="/">

              <li>home</li>

              </Link>

              <Link href="/store">

              <li>Store</li>

              </Link>

            </ul>
          </nav>
        </header>
    )
}