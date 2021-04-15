import Button from './button';

export default function HomeCard() {
    return (
        <div className="bg-gradient-to-b shadow-2xl xl:pr-[60px] from-[#FCDFD3] to-[#EDEAD7] rounded-lg lg:absolute h-[535px] lg:right-[0px] lg:top-[263px] pt-[1px] lg:pr-[15px] xl:pr-[0px] lg:pt-[0px]">
            <div className="bar mx-[50px] h-5 rounded bg-white mx-auto mt-[21px]"></div>
            <div className="flex justify-center">
                <div className="first  xl:ml-[58px] relative ml-[3px] sm:ml-[20px]">
                    <img src="/User 1.png" alt="Vercel Logo" className="w-[64px] h-[64px] absolute top-[60px] lg:left-[5px] xl:left-[-20px]" />
                    <img src="/Group 60.png" alt="Vercel Logo" className="shadow-lg rounded mt-[99px]  mb-[31.5px] bg-cover  sm:h-[130px] h-[172px]" />
                    <button className="rounded bg-gray-300 h-[113px]  mb-7 shadow-md mt-1">
                        <img src="/alarm.png" alt="Vercel Logo" className="sm:ml-14 py-2" />
                    </button>
                </div>
                <div className="sm:w-[180px] md:w-[200px] lg:w-[200px] xl:w-[221px] xl:ml-[40px]  md:ml-[20px] xl:mr-[33px] lg:mr-[7px] mt-[24px]">
                    <div class="relative text-gray-600 focus-within:text-gray-400 p-[8px]">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2 ml-[10px]">
                            <button type="submit" class="p-1 ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" class="py-2 text-sm h-8 text-white bg-white rounded pl-10 focus:outline-none  focus:text-gray-900 w-full" placeholder="Search..." autocomplete="off"></input>
                    </div>
                    <div className="flex justify-between content-center px-[20px] mt-[24px] text-white font-bold text-2xl h-[40px] sm:h-[75.5px]">
                        <p className="xl:w-[75.5px] xl:h-[75.5px] sm:w-[65.5px] w-[45.5px] sm:h-[65.5px] h-[45.5px] rounded bg-red-600 flex justify-center content-center pt-3 shadow-md">Aa</p>
                        <p className="xl:w-[75.5px] xl:h-[75.5px] sm:w-[65.5px] w-[45.5px] sm:h-[65.5px] h-[45.5px] rounded bg-blue-600 flex justify-center content-center pt-3 shadow-md">Aa</p>
                    </div>
                    <div className="text-[10px] sm:text-[11px] bg-pink-50 shadow-md rounded mt-[39.4px]">
                        <div className="flex justify-between mx-2 pt-2">
                            <span>Tailwind css</span>
                            <button className="bg-white text-black p-1">Copy Code</button>
                        </div>
                        <p className="mx-2 mt-2 pt-1 pr-5">&lt;!-- On: "bg-indigo-600", Off: "bg-gray-200" --&gt;</p>

                        <p className="mx-2 mt-2 pt-1 pr-5 text-green-500">
                            &lt;span aria-checked="false" <br /> class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 &gt;
                        </p>

                        <p className="mx-2 mt-2 pb-2 pt-1 pr-1">
                            border-2
                            <span className="text-red-500"> border-transparent rounded-full cursor-pointer transition-colors</span> <br />
                            ease-in-out
                        </p>
                    </div>
                </div>
                <div className=" ml-[2px] sm:ml-[20px] lg:ml-[0px]">
                    <div className="relative flex justify-end mt-[13px] mb-[47px]  ml-[34px] h-[119px]">
                        <div className="bg-white w-[51px] h-[67.5px] absolute left-1 bottom-1 rounded">
                            <div class="relative inline-block w-11 mt-[11px] ml-1 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute ml-6 block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label for="toggle" class="toggle-label block overflow-hidden h-5 mx-1 rounded-full bg-red-500 cursor-pointer"></label>
                            </div>
                            <div class="relative inline-block mt-[7px] w-11 ml-1 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute ml-1 block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label for="toggle" class="toggle-label block overflow-hidden h-5 mx-1 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>
                        <img src="/user 3.png" alt="Vercel Logo" className="mr-[21px] w-[64px] h-[64px]" />
                    </div>
                    <button className="text-white text-4xl border-dashed border-2 rounded border-white w-[120px] sm:w-[148px] h-[55px]">+</button>
                    <div className=" sm:h-28 ">
                        <div className="grid shadow-md grid-cols-2 mt-[43.5px]  grid-rows-2 pt-3 gap-[9.5px] p-[10px] bg-white rounded-md w-[120px] sm:w-[151px] h-[120px] sm:h-[139px] z-10 relative">
                            <img src="/p1.png" alt="Vercel Logo" className="sm:w-[62px] w-[50px] sm:h-[51px] h-[40px]" />
                            <img src="/p2.png" alt="Vercel Logo" className="sm:w-[62px] w-[50px] sm:h-[51px] h-[40px]" />
                            <img src="/p3.png" alt="Vercel Logo" className="sm:w-[62px] w-[50px] sm:h-[51px] h-[40px] " />
                            <img src="/p4.png" alt="Vercel Logo" className="sm:w-[62px] w-[50px] sm:h-[51px] h-[40px] " />
                        </div>
                        <img src="/user 4.png" alt="Vercel Logo" className="mt-[-11px] ml-[40px] sm:ml-[102px] z-0 relative" />
                    </div>
                </div>
            </div>
        </div>
    );
}
