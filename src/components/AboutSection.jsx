import React from 'react'
import leftTree from '../assets/images/left-tree.webp'
import rightTree from '../assets/images/right-tree.webp'
import rightDino from '../assets/images/right-dino.webp'

const AboutSection = () => {
    return (
        <>
            <div className="z-[unset] bg-[#09655A] relative sm:pt-20 pt-10 -mt-1" id="about">
                <img
                    src={rightTree} alt="Right-Tree"
                    className="absolute right-0 lg:bottom-[-6%] sm:bottom-[-14%] bottom-0 z-[1] lg:max-w-[270px] sm:max-w-[200px] max-w-[120px]" />
                <img
                    src={leftTree} alt="left-Tree"
                    className=" absolute lg:bottom-[-33%] sm:bottom-[-12%] bottom-0 left-0 z-[1] w-full lg:max-w-[197px] sm:max-w-[120px] max-w-[80px]" />
                <img
                    src={rightDino} alt="right-dino"
                    className="absolute bottom-[-18%] right-[0] z-[1] lg:max-w-[170px] sm:max-w-[130px] max-w-[90px] w-full vertical_motion " />
                <div className="container max-w-[1156px] relative mx-auto px-3 z-[1]">
                    <h2
                        className="font-normal sm:text-[69.669px] text-[42px] ff-dino drop-shadow-[0px_2.38px_0px_#FFF] leading-[113%] sm:mb-[42px] mb-6 text-center"><span className="ff-chewy text-white">About</span> <span className="text-[#FBA11D]">D</span><span
                            className="text-[#23AAAC]">i</span><span className="text-[#D45B07]">n</span><span className="text-[#8EC627]">o</span><span
                                className="text-[#FCCA2B]">L</span><span className="text-[#8F78D2]">F</span><span className="text-[#8EC627]">G</span></h2>
                    <p className="text-white text-center sm:text-[24px] text-[16px] font-normal leading-[121%] mb-[18px] ff-balsamiq">$DINO is a meme coin with very strong utility.</p>
                    <p className="text-white text-center ff-balsamiq mx-auto sm:text-[24px] text-[16px] lg:max-w-[560px] leading-[127%] mb-[10px] font-normal">Biggest problem of meme coins is lack of utility and usecase, <span
                        className="text-[#8EC627] font-bold ">$</span><span className="text-[#FBA11D] font-bold">D</span><span
                            className="text-[#23AAAC] font-bold">I</span><span className="text-[#D45B07] font-bold">N</span><span
                                className="text-[#FB5352] font-bold">O</span> is going to fix it.</p>
                    <p className="text-white mx-auto text-center font-normal sm:text-[24px] text-[16px] lg:max-w-[560px] leading-[127%] mb-3.5 ff-balsamiq">We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                    <p className="text-white sm:text-[24px] text-[16px] font-normal lg:max-w-[599px] text-center leading-[121%] md:pb-5 sm:pb-9 pb-7 ff-balsamiq mx-auto">In $DINO, we want to build a very strong community, that’s why we are going to have a lot of
                        games and crypto tips in our Telegram and Twitter.</p>
                </div>
            </div>
        </>
    )
}

export default AboutSection
