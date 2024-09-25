import React from 'react'
import logo from "../assets/hilogonew.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import { motion } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };



  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <button onClick={toggleMenu} className="mx-2 w-10">
          <FaBars className="text-3xl" /> {/* Hamburger icon */}
        </button>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Dropdown menu for navigation options */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}

          className="absolute top-16 left-0 bg-gray-800 text-white w-48 py-2 rounded-lg shadow-lg">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#about" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleMenu} >About Me</a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <a href="#technologies" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleMenu} >Technologies</a>
          </motion.div>





          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
          >
            <a href="#experience" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleMenu}>Experience</a>
          </motion.div>


          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
          >
            <a href="#projects" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleMenu}>Projects</a>
          </motion.div>


          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5 }}
          >
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-700" onClick={toggleMenu}>Contact</a>
          </motion.div>
        </motion.div>
      )}



      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href='https://www.linkedin.com/in/muhammad-haris-idrees-a9aa14261/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href='https://github.com/Dudeprox' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href='https://www.instagram.com/haris.idrees.m/' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

        <div>
          <a href="/Haris_Idrees_Resume_2024.pdf" download="Haris_Idrees_Resume_2024.pdf">
            <button className='px-4 py-1 text-base rounded-lg border border-white'>

              <p className='flex items-center gap-1'>CV <LiaDownloadSolid /></p>
            </button></a>
        </div>


      </div>



    </nav>

  )
}

export default Navbar