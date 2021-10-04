import { useEffect } from "react"
import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import Home from "@material-ui/icons/Home";
import CodeIcon from '@material-ui/icons/Code';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';


function Header() {

  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (!window) {
      const url = window.location.href
      const uri = url.split("/")
      const id = uri[uri.length - 1]
      console.log(id)
      console.log(url)
      console.log(url)
      console.log(url)
      console.log(url)
      console.log(url)
    }
  }, [])
  return (
    <>
      <header className="hidden md:flex bg-white dark:bg-gray-800">
        <nav className="bg-white dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
              <Link href="/">
                <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">home</a>
              </Link>
              {/* <Link href="/feed">
                <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Feed</a>
              </Link> */}
              <Link href="/online-compiler">
                <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Online Compiler</a>
              </Link>
              <Link href="/blocks">
                <a className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blocks</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* <div className="relative"> */}
      <div className="md:hidden w-full bottom-0 fixed z-10">
        <BottomNavigation value={value} onChange={handleChange}>
          <Link href="/">
            <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
          </Link>
          {/* <Link href="/feed">
            <BottomNavigationAction label="Feed" value="Feed" icon={<ViewCarouselIcon />} />
          </Link> */}
          <Link href="/online-compiler">
            <BottomNavigationAction label="Coding" value="Coding" icon={<CodeIcon />} />
          </Link>
          <Link href="/blocks">
            <BottomNavigationAction label="Block" value="Block" icon={<ViewQuiltIcon />} />
          </Link>
          {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
      </BottomNavigation>
    </div>
      {/* </div> */ }
    </>
  )
}


export default Header