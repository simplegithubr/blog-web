
import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className='min-h-screen text-center   p-9 '>
        <div className='ml-9'>
            <h1 className=' text-2xl   font-bold'>About Kinza Blogs</h1>
            <h3 className='mt-3 ml-[14%] text-xl font-bold text-gray-800'>Welcome to Kinza Sheikh s Blog  Transforming Ideas into Artistic Masterpieces</h3>
            <Image src="/kinza.png" alt='' width={900} height={400} className='md:ml-[19%] mt-4'></Image>
        <p className='mt-2 text-xl'>
Here s a general About Content for your blog website

About Kinza Sheikh

Welcome to my creative space! Im Kinza Sheikh, an artist and DIY enthusiast with a passion for transforming ideas into beautiful realities. This blog is where I share my journey inspirations and projects, covering everything from home decor DIYs to upcycled art and creative crafts

Each post is a reflection of my love for art design and sustainability My goal is to inspire you to explore your creative side add a personal touch to your space and discover the joy of making something extraordinary with your own hands

Join me as we turn ordinary moments into artistic adventures and bring vibrant ideas to life Lets create something amazing together!</p>
        </div>

      
    </div>
  )
}

export default About
