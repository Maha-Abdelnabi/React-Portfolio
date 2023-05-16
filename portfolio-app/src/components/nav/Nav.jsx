import React from 'react'
import './nav.css'
import {RiHome8Line} from 'react-icons/ri'
import { FiUser } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHome8Line />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FaRegPaperPlane />
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav("#resume")}
        className={activeNav === "#resume" ? "active" : ""}
      >
        <ImNewspaper />
      </a>
    </nav>
  );
}

export default Nav;