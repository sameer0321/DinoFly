import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-[#0A4740] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <h2
                        className=" animate-bounce ff-dino font-normal cursor-pointer leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] text-[70px]">
                        D<span className="text-[#23AAAC]">i</span><span className="text-[#D45B07]">n</span><span
                            className="text-[#8EC627]">o</span><span className="text-[#FCCA2B]">L</span><span className="text-[#8F78D2]">F</span><span
                                className="text-[#8EC627]">G</span></h2>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader