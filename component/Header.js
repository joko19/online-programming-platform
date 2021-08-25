import { useEffect } from "react"

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
            <a href="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">home</a>
            <a href="/online-compiler" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Online Compiler</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header