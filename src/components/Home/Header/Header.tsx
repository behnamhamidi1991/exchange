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
        <div className="main-header-left">
          <div className="main-header-logo">
            <Image src={logoIcon} width={30} height={30} alt="logo" />
          </div>
          <ul className="main-header-links">
            <li>
              <Link href="/" className="main-header-navlinks">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="main-header-navlinks">
                Market
              </Link>
            </li>
            <li>
              <Link href="/" className="main-header-navlinks">
                Events
              </Link>
            </li>
            <li>
              <Link href="/" className="main-header-navlinks">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="main-header-navlinks">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="main-header-right"></div>
      </header>
    </div>
  );
};

export default Header;
