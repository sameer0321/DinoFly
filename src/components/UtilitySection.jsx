import React from 'react'
import topLayer from '../assets/images/utility-top-layer.webp'
import bottomLayer from '../assets/images/utility-bottom-layer.webp'
import treeElispe from '../assets/images/utility-tree.webp'
import Dino1 from '../assets/images/utility-dino-1.webp'
import Dino2 from '../assets/images/utility-dino-2.webp'

const UtilitySection = () => {
    return (
        <>
            <div className="relative overflow-hidden bg-[#0A4740]">
                <img src={topLayer}
                    alt="Utility-Top-Layer" className="absolute top-0 w-full left-0 right-0" />
                <img
                    src={bottomLayer} alt="bottom-Layer"
                    className="absolute xl:h-[298px] sm:h-[250px] h-[110px] bottom-0 left-0 right-0 w-full" />
                <div
                    className="container mx-auto max-w-[1038px] xl:pt-[250px] lg:pt-[180px] pt-[80px] mb-[168px] px-3 z-[1] relative">
                    <img src={treeElispe} alt="Utility-Tree"
                        className="absolute bottom-[11px] right-[-22%] z-[-1] w-full max-w-[350px]" />
                    <h2
                        className="ff-chewy sm:text-[64px] text-[35px] font-normal leading-[131%] text-white text-center">Utility and Usecase</h2>
                    <div
                        className="rounded-[20px] border sm:ps-[39px] sm:pe-[24px] px-6 border-white bg-[#09655A] border-solid lg:h-[266px] flex items-center lg:flex-row flex-col xl:mt-[158px] lg:mt-[100px] sm:mt-[80px] mt-[45px]">
                        <div className="pt-[28px] lg:pt-0">
                            <p className="text-white lg:max-w-[681px] lg:text-start text-center font-normal leading-[119%] sm:mb-[28px] mb-[18px] sm:text-[32px] text-[20px] ff-balsamiq">We are going to work hard in otder to add <span
                                className="text-[#8EC627] font-bold">$</span><span className="text-[#FBA11D] font-bold">D</span><span
                                    className="text-[#23AAAC] font-bold">I</span><span className="text-[#D45B07] font-bold">N</span><span
                                        className="text-[#FB5352] font-bold">O</span> to main platforms as a form of payment</p>
                            <p className="text-white sm:text-[32px] text-[20px] lg:text-start text-center font-normal leading-[119%] lg:max-w-[695px] ff-balsamiq">You will be able to buy a lot of things with <span
                                className="text-[#8EC627] font-bold">$</span><span className="text-[#FBA11D] font-bold">D</span><span
                                    className="text-[#23AAAC] font-bold">I</span><span className="text-[#D45B07] font-bold">N</span><span
                                        className="text-[#FB5352] font-bold">O</span></p>
                        </div>
                        <img src={Dino1} alt="DragonWithScatBord"
                            className=" w-full sm:max-w-[255.51px] max-w-[180px] mt-[60px] lg:mt-0 lg:h-[323px] vertical_motion lg:mb-[44px]" />
                    </div>
                    <div
                        className="lg:mt-[125px] sm:mt-[80px] mt-[50px] flex lg:flex-row flex-col-reverse items-center lg:pr-[27px] px-6 lg:px-0 lg:pt-0 pt-[28px] lg:justify-between bg-[#09655A] border border-solid border-white rounded-[20px] lg:h-[266px] xl:mb-[441px] md:mb-[407px] mb-[180px]">
                        <img src={Dino2} alt="DragonWithCycle"
                            className="w-full sm:max-w-[267px] max-w-[180px] lg:h-[334.16px] lg:mb-[58px] vertical_motion" />
                        <p className="lg:max-w-[681px] lg:text-end text-center mb-[70px] lg:mb-0 text-white font-normal lg:text-[32px] sm:text-[24px] text-[20px] ff-balsamiq">We are going to have staking and buyback/ burning mechanism</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UtilitySection
