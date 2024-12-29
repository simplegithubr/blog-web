
import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className=' flex  justify-between  p-8 shadow-md'>
      <h1 className='md:ml-8 ml-2 font-bold md:text-2xl text-sm '>Kinza Sheikh</h1>
      <nav className='md:space-x-7 space-x-3   '>
        <Link  href="/">Home</Link>
        <Link href="/">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className='flex space-x-2  mr-9'>
      <h4 className='ml-2'>Search</h4>
      <CiSearch size={24} />
      </div>
    </div>
  )
}
