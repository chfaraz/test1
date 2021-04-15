import Card from '../components/card';
import FirstSection from '../components/firstSection';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import SecondSection from '../components/secondSection';
import SectionThree from '../components/sectionthree';
import Numbers from '../components/numbers';
import styles from '../styles/Home.module.css';
import BottomCard from '../components/bottomCard';
export default function Home() {
    return (
        <div className="relative -hidden font-lato">
            <div className="">
                <div className="lg:bg-back-ground  lg:bg-cover mt-[-5px]">
                    <div className="px-[20px] lg:px-[80px]">
                        {/* <div className="absolute h-[1024px] flex w-full">
                    <div className="w-[800px]"></div>
                    <div className="w-auto lg:bg-gradient-to-b from-[#FF8784] to-[#DFF1BC] h-full"></div>
                </div> */}
                        <div className="container relative  mx-auto ">
                            <Header />
                            <Hero />
                        </div>
                    </div>
                </div>
                <div className="px-[20px] lg:px-[80px]">
                    <div className="container  mx-auto">
                        <FirstSection />
                    </div>
                </div>
            </div>

            <div className=" pt-[140px] relative bg-gradient-to-b from-pink-50 to-white">
                <div className="px-[20px] lg:px-[80px]">
                    <div className="container mx-auto">
                        <div className="flex md:justify-between justify-around mx-auto top-[-62px] mt-[-230px] flex-wrap">
                            <Card title="Download the app" icon="vector2.svg" padding=" mt-[20px]" />
                            <Card title="Effortless onboarding" icon="homeIcon.png" padding=" mt-[20px]" />
                            <Card title="Access from anywhere" icon="phoneLogo.png" padding=" mt-[20px]" />
                            <Card title="Build & ship rapidly" icon="message.svg" padding="xl:mx-[0] mt-[20px] " />
                        </div>
                        <div className="">
                            <SecondSection text="Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution" img="peter-olexa.png" title="Boost adoption of product and services" link="Lets Get Started " right position="left-[33px]" margintop="mt-[128px]">
                                <img src="a.png" className="bg-cover  w-[353px] h-[173px]" />
                            </SecondSection>
                            <SecondSection text="Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution" img="Group 659.png" title="Stay up to date with how you’re performing" link="Lets Get Started " left position="left-[33px]" margintop="mt-[128px]">
                                <img src="b.png" className="xl:w-[353px] lg:w-[280px] h-[173px]" />
                            </SecondSection>

                            <SecondSection text="Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution" img="Group 658.png" title="Easily manage sales through our invoicing system" link="Lets Get Started " right position="xl:left-[0px] ml-[40px] xl:bottom-[0px] sm:left-[30px]" margintop="mt-[194px]">
                                <div className="px-[17.64px] py-[16px] h-[178px]">
                                    <h1 className="text-[18px] leading-[18px]">Invoice # 35RD87</h1>
                                    <p className="text-[12px] leading-[12px] text-[#718096] mt-[8px] mb-[20px]">Assigned to: Josh Rollins</p>
                                    <p className="text-[14px] leading-[14px] mb-[12px]">Specter Consultancy</p>
                                    <span className="text-[14px] leading-[14px]">2,354 USD</span>
                                    <button className="bg-pink-400 rounded-md justify-center font-raleway items-center text-white w-[124.5px] h-[28px] text-[12px] leading-[12px] mt-[18px] flex">
                                        View Invoice
                                        <img src="/Vector.svg" alt="Vercel Logo" className="font-semibold ml-[8.82px]" />
                                    </button>
                                </div>
                            </SecondSection>
                        </div>
                    </div>
                    <div className="">
                        <hr className="mt-[136px] xl:w-[943px] lg:w-[643px] container mx-auto" />
                        <SectionThree />
                        <p className="font-black text-[28px]  xl:text-[64px] font-lato text-center  tracking-[-0.025em] mx-auto xl:leading-[89.6px] lg-w[850px] xl:w-[1062px] mt-[260px] sm:mt-[230px]">
                            "Thanks guys, keep up the good work! I'd be lost without Prodify. The very best. Prodify is both attractive and highly adaptable."
                            <p className="text-pink-600 mt-[40px] sm:mt-[85px]">- Ben P.</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-wrap justify-center lg:justify-between mt-[200px] lg:mt-[439px] lg:w-[900px] xl:w-[1192px] mx-auto ">
                <Numbers number="40K +" title="Downloads" />
                <Numbers number="200K" title="Users/Teams" />
                <Numbers number="958" title="Products Developed" />
                <Numbers number="10" title="Awards Bagged" />
            </div>
            <div className="border-3 px-[20px] lg:px-[80px] bg-gradient-to-b from-white to-[#FDF7F7] pt-[354px] mt-[222px]">
                <BottomCard />
                <Footer />
            </div>
        </div>
    );
}
