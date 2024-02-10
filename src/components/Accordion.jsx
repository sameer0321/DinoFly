import React from 'react'
import cutimage from '../assets/images/roadmapbottomimg.png'
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg className={`${id === open ? "rotate-180" : "rotate-0"}  sm:mr-12   transition-transform`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)" fill="white" />
                <path d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z" fill="#0A4740" />
            </svg>


        </div>
    );
}

const Accordian = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className='bg-[#0A4740] relative'>
                <img src={cutimage} alt="cut" className="absolute block top-[-5%] w-full right-0 left-0" />
                <div id="faq" className="relative">
                    <div className="max-w-[1140px] mx-auto px-3  lg:pt-[310px] md:pt-[200px] sm:pt-[150px] pt-[100px]">
                        <h2 className='sm:text-[64px] text-[40px] leading-[132%] text-center font-normal  ff-chewy text-white lg:mb-[61px] mb-[35px]'>FAQs</h2>
                        <div data-aos-delay="400" data-aos="zoom-in" className=" mx-auto relative max-w-[800px] px-2 ">
                            <Accordion className={`border-white border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 1 ? 'rounded-[26px] sm:rounded-[45px] ' : 'rounded-full'}`} open={open === 1} icon={<Icon id={1} open={open} />}                >
                                <AccordionHeader onClick={() => handleOpen(1)} className=" ff-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white w-full justify-between" >Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                                <AccordionBody className=" ff-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                            </Accordion>
                            <Accordion className={`border-white border bg-[#09655A] mb-6 overflow-hidden rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 2 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 2} icon={<Icon id={2} open={open} />} >
                                <AccordionHeader onClick={() => handleOpen(2)} className=" ff-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white"> Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                                <AccordionBody className=" ff-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                            </Accordion>
                            <Accordion className={`border-white border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 3 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 3} icon={<Icon id={3} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(3)} className=" ff-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white" >Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                                <AccordionBody className=" ff-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                            </Accordion>
                            <Accordion className={`border-white border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 4 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 4} icon={<Icon id={4} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(4)} className=" ff-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white">Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                                <AccordionBody className=" ff-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                            </Accordion>
                            <Accordion className={`border-white border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 5 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 5} icon={<Icon id={5} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(5)} className=" ff-balsamiq text-[11px] sm:text-[16px] md:text-[20px] text-start font-bold text-white">Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                                <AccordionBody className=" ff-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian