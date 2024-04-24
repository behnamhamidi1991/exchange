import React from "react";
import logoIcon from "@/assets/cryptoicon.png";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { AiOutlineQrcode } from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <div className="main-header-wrapper">
      <header className="main-header">
        <div className="header-navbar">
          <div className="header-navbar-logo">
            <Image src={logoIcon} width={30} height={30} alt="logo" />
          </div>
          <ul className="header-navbar-links">
            <li>
              <Link href="/" className="header-nav-item">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/" className="header-nav-item">
                بازار
              </Link>
            </li>
            <li>
              <Link href="/" className="header-nav-item">
                رویدادها
              </Link>
            </li>
            <li>
              <Link href="/" className="header-nav-item">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/" className="header-nav-item">
                تماس ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-icons"></div>
      </header>
    </div>
  );
};

export default Header;
