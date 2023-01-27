import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    let Links=["About","News","Events","Academics","Research","Campus Life","Inscription"]
  return (
    <div className="bg-[#086425] pt-5">
        <div className='container mx-auto'>
            <div className="flex justify-between items-center">
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <section className="links">
                    {Links.map(link=>(
                        <Link href={"/"} key={link} className="text-white text-md px-2">{link}</Link>
                    ))}
                </section>
                <div>
                    <button className='text-white bg-[#24920E] px-5 py-2 flex items-center rounded-md'>
                        <span className="material-symbols-outlined mr-2">search</span>
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar