import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Shantanu's Shop All rights reserverd</p>
      <p className="icons">
      <Link href={`https://www.instagram.com/shantanu__waikar/`}>
        <AiFillInstagram style={{cursor:"pointer"}}/>
      </Link>
      <Link href={`https://twitter.com/`}>
        <AiOutlineTwitter style={{cursor:"pointer"}}/>
      </Link>
      </p>
    </div>
  )
}

export default Footer