import React from 'react'
import Navbar from './Navbar'
import DinoWithPlane from '../assets/images/DinoWithPlane.webp'
import DinoOnSkate from '../assets/images/DinoOnSkate.webp'
import DinoOnCycle from '../assets/images/DinoOnCycle.webp'


const HeroSection = () => {
    return (
        <div>
            <div
                className="bg-heropattern overflow-hidden lg:bg-full bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px] relative pt-7 z-0">
                <img src={DinoOnSkate} alt="Dino-on-skate"
                    className="absolute right-[8.5%] bottom-[12%] lg:max-w-[211px] sm:max-w-[140px] max-w-[80px] walking-img w-full z-[1]" />
                <img src={DinoOnCycle} alt="Dino-on-cycle"
                    className="absolute left-[49.5%] bottom-[19%] ImgAnimate md:max-w-[131px] sm:max-w-[65px] max-w-[40px] w-full z-0" />
                <div className="container max-w-[1156px] mx-auto px-3">
                    <Navbar />
                    <div className="flex sm:flex-row flex-col-reverse items-center flex-wrap">
                        <div
                            className="sm:w-5/12 w-full sm:mt-0 mt-5 flex items-end justify-center sm:justify-start xl:ps-10"><img src={DinoWithPlane} alt="Dino-with-plane"
                                className="sm:max-w-[395px] w-full max-w-[250px] plan_ani" /></div>
                        <div className="sm:w-7/12 w-full flex justify-center">
                            <h1
                                className="ff-dino font-normal lg:text-[175.64px] md:text-[130px] sm:text-[110px] text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
                                <span className="text-[#FBA11D]">D</span><span className="text-[#23AAAC]">I</span><span
                                    className="text-[#D45B07]">N</span><span className="text-[#8EC627]">O</span><br className="sm:block hidden" /><span
                                        className="text-[#8EC627]">L</span><span className="text-[#FCCA2B]">F</span><span className="text-[#8F78D2]">G</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
