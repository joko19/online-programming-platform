import { useEffect } from "react"
import Link from 'next/link'

function Header() {
  useEffect(() => {
    if (!window) {
      const url = window.location.href
      const uri = url.split("/")
      const id = uri[uri.length - 1]
      console.log(id)
    }
  }, [])
  return (
    <header className="bg-white dark:bg-gray-800">
      <nav className="bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
            <Link href="/">
              <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">home</a>
            </Link>
            <Link href="/feed">
              <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Feed</a>
            </Link>
            <Link href="/online-compiler">
              <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Online Compiler</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header