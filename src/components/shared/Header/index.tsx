import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.svg";
import searchIcon from "@/assets/icons/search.svg";
import homeEventIcon from "@/assets/icons/home-event.svg";
import menuIcon from "@/assets/icons/menu.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header
      className={`${styles.NavBar} flex flex-row items-center justify-evenly z-20`}
    >
      <div className="container flex flex-row items-center justify-evenly flex-grow-1">
        <div className="flex flex-row items-center">
          <Link href="/">
            <Image src={logo} alt="Testvalley" />
          </Link>
          <Link href="#" className="text-light-green flex flex-row ps-3">
            <Image src={menuIcon} alt="menu" />
            &nbsp;
            <span className="text-xl">카테고리</span>
          </Link>
        </div>
        <div className="">
          <div className="relative">
            <input
              type="text"
              className={`${styles.searchInput} border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500`}
              placeholder="살까말까 고민된다면 검색해보세요!"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image src={searchIcon} alt="search" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image src={homeEventIcon} alt="search" />
          <div className="h-4 border-l border-gray-300 mr-2 ml-2"></div>
          <Link href="#">로그인 / 회원가입</Link>
        </div>
      </div>
    </header>
  );
}
