import { useState } from 'react';

export default function Header() {
    const [show, setShow] = useState(false);
    console.log(show);
    return (
        <header className="flex absolute w-full h-[92px] justify-between mt-[44px]" onClick={() => setShow(!show)}>
            <img src="/Group 690.svg" alt="Vercel Logo" className=" w-[79px] h-[92]" />
            {show ? (
                <nav className="bg-gradient-to-b shadow-2xl from-[#FCDFD3] to-[#EDEAD7] absolute w-full h-[99vh] mt-[-38px] z-20">
                    <div className="text-[66px] relative z-20 mt-[10px]" onClick={() => setShow(!show)}>
                        <div className="absolute right-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                    <ul className="sm:flex mt-[24px] lg:mt-[0px] mt-[70px] text-center md:flex justify-between lg:text-white font-black text-[30px] tracking-[0.01em]">
                        <li className="xl:mr-[32px] lg:mr-[12px] my-[20px] md:mr-[12px] self-center">Home</li>
                        <li className="xl:mr-[32px] lg:mr-[12px] my-[20px] md:mr-[12px] self-center">About Us</li>
                        <li className="xl:mr-[32px] lg:mr-[12px] my-[20px] md:mr-[12px] self-center">Pricing</li>
                        <li className="xl:mr-[47px] lg:mr-[17px] my-[20px] md:mr-[17px] self-center">Resources</li>
                        <li className="flex rounded bg-[#FFAFAA] w-[170px] mx-auto h-[52px]">
                            <p className="lg:ml-[13px] ml-[20px] md:ml-[13px] xl:ml-[24px] self-center">Sign In</p>
                            <img src="/Vector.svg" alt="Vercel Logo" className="ml-[12px] self-center w-[22px] h-[21.62px]" />
                        </li>
                    </ul>
                </nav>
            ) : null}
            <nav className="relative z-10">
                <ul className="flex mt-[24px] lg:mt-[0px] md:flex hidden justify-between lg:text-white font-bold font-[18px] tracking-[0.01em]">
                    <li className="xl:mr-[32px] lg:mr-[12px] md:mr-[12px] self-center">Home</li>
                    <li className="xl:mr-[32px] lg:mr-[12px] md:mr-[12px] self-center">About Us</li>
                    <li className="xl:mr-[32px] lg:mr-[12px] md:mr-[12px] self-center">Pricing</li>
                    <li className="xl:mr-[47px] lg:mr-[17px] md:mr-[17px] self-center">Resources</li>
                    <li className="flex rounded bg-[#FFAFAA] lg:w-[100px] md:w-[100px] xl:w-[133px] h-[42px]">
                        <p className="lg:ml-[13px] md:ml-[13px] xl:ml-[24px] self-center">Sign In</p>
                        <img src="/Vector.svg" alt="Vercel Logo" className="ml-[12px] self-center w-[12px] h-[11.62px]" />
                    </li>
                </ul>
            </nav>
            <p className="text-[66px] sm:hidden z-10 float-right" onClick={() => setShow(!show)}>
                <img src="menu.svg" alt="Vercel Logo" className="z-30 w-[50px] h-[50px]" />
            </p>
        </header>
    );
}
