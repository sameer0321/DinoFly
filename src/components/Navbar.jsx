import React from 'react'
import { Discord, Instagram, Twitter } from './Icon'
import { useState } from 'react'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classNameList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classNameList.remove("max-lg:overflow-hidden")
        }
    };

    return (
        <div>
            <nav
                className="container max-w-[1156px] mx-auto lg:py-[15.8px] py-3 lg:ps-6 lg:pe-2 px-4 bg-white rounded-[61.102px] border-b-4 border-b-[black] flex items-center justify-between sm:mb-20 mb-10 h-[67px]">
                <a href="">
                    <h2
                        className="ff-dino font-normal cursor-pointer leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] sm:text-[40px] text-[28px]">
                        D<span className="text-[#23AAAC]">i</span><span className="text-[#D45B07]">n</span><span
                            className="text-[#8EC627]">o</span><span className="text-[#FCCA2B]">L</span><span className="text-[#8F78D2]">F</span><span
                                className="text-[#8EC627]">G</span></h2>
                </a>
                <ul
                    className={`${nav ? "left-0" : "left-[-100%]"
                        } flex items-center gap-[28px] mobileView duration-300`}>
                    <li><a onClick={show} href="#about"
                        className="text-black ff-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear">About</a>
                    </li>
                    <li><a onClick={show} href="#Tokenomic"
                        className="text-black ff-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear">Tokenomic</a>
                    </li>
                    <li><a onClick={show} href="#Roadmap"
                        className="text-black ff-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear">Roadmap</a>
                    </li>
                    <li><a onClick={show} href="#faq"
                        className="text-black ff-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear">FAQ</a>
                    </li>
                    <li className="lg:hidden flex"><a href=""
                        className="bg-joinbtn bg-full bg-no-repeat text-black ff-chewy text-[18px] font-normal leading-normal px-9 pt-[11px] pb-[20px]">Join
                        Now</a></li>
                    <li className="gap-2 items-center sm:hidden flex">
                        <a onClick={show} href="https://www.twitter.com" target="_blank">
                            <Twitter />
                        </a>
                        <a onClick={show} href="https://www.discord.com" target="_blank">
                            <Discord />
                        </a>
                        <a onClick={show} href="https://www.instagram.com" target="_blank">
                            <Instagram />
                        </a>
                    </li>
                </ul>
                <ul className="gap-2 items-center sm:flex hidden">
                    <li>
                        <a href="https://www.twitter.com" target="_blank">
                            <Twitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.discord.com" target="_blank">
                            <Discord />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <Instagram />
                        </a>
                    </li>
                    <li><a href=""
                        className="bg-joinbtn bg-full bg-no-repeat text-black ff-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px] lg:block hidden hover:text-white transition-all duration-500 ease-in-out">Join
                        Now</a></li>
                </ul>
                <label className='lg:hidden' onClick={show}>
                    {nav ? (
                        <div className='relative z-40'>
                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl rotate-45 mb-1'></span>
                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                        </div>
                    ) : (
                        <div className='relative z-40'>
                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl mb-1'></span>
                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl mb-1'></span>
                            <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl'></span>
                        </div>
                    )}
                </label>
            </nav>
        </div>
    )
}

export default Navbar
