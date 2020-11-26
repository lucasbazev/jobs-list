import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center text-white font-bold bg-black p-2'>
      <ul className='md:flex justify-evenly text-white text-lg font-bold my-4'>
        <li> <a href='https://github.com/lucasbazev' target='_blank'>GitHub</a> </li>
        <li> <a href='https://www.linkedin.com/in/lucasbazev/' target='_blank'>LinkedIn</a> </li>
        <li> <a href='https://codepen.io/jobs.json' target='_blank'>Source: CodePen Jobs</a> </li>
      </ul>
    </footer>   
  )
}

export default Footer;