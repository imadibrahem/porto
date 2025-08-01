"use client" // this is a client component
import React, { useState } from "react"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { Link as OriginalLink } from "react-scroll/modules"

const Link = OriginalLink as any;  // Type assertion to fix the TypeScript issue

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  let themeIcon;

  if (currentTheme === "dark" || currentTheme === undefined) {
    themeIcon = (
      <button
        onClick={() => setTheme("light")}
        className="bg-slate-100 p-2 rounded-xl"
      >
        <RiSunLine size={25} color="black" />
      </button>
    );
  } else {
    themeIcon = (
      <button
        onClick={() => setTheme("dark")}
        className="bg-slate-100 p-2 rounded-xl"
      >
        <RiMoonFill size={25} />
      </button>
    );
  }

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-900">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Imad Ibrahem</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-100 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
  {NAV_ITEMS.map((item, idx) => {
    return (
      <Link
        key={idx}
        to={item.page}
        className={
          "block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-400 cursor-pointer"
        }
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => setNavbar(!navbar)}
      >
        {item.label}
      </Link>
    )
  })}
  {themeIcon}
</div>

          </div>
        </div>
      </div>
    </header>
  )
}
