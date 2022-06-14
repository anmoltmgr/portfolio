import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.youtube.com/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.youtube.com/" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/" target="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocial