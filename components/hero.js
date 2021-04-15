import Button from '../components/button';
import HomeCard from '../components/homeCard';

export default function Hero() {
    return (
        <main className="flex lg:flex-nowrap container mx-auto relative flex-wrap lg:h-[1024px]">
            <div className="container mx-auto ">
                <p className="font-lato xl:font-black font-black xl:text-[128px] text-[60px] md:text-[80px] lg:text-[100px] mt-[180px] lg:mt-[281px] md:mb-[45px] mb-[40px] lg:mb-[82px] leading-[111%]">
                    Build.
                    <p className="">Review.</p>
                    <p>Ship.</p>
                </p>
                <div className="bg-[#fff] lg:mt-[150px] xl:mt-[0px] mt-[0px] font-raleway text-[15px] md:text-[22px] lg:text-[28px] md:leading-[40px] tracking-[-0.01em]">
                    <p>The next big thing starts here.</p>
                    <p className="">Get Prodify and be the first to market</p>
                    <p>with an integrated product that you love</p>
                </div>
                <Button background="bg-gradient-to-r from-[#F46466] font-bold text-[20px] to-[#D6408B] mt-[20px] sm:mt-[43px] h-[50px] sm:h-[72px]">Let's Build</Button>
            </div>
            <div className="lg:mr-[-5px] mt-[100px] md:mt-[0px] container mx-auto">
                <div className="relative">
                    <HomeCard />
                </div>
            </div>
        </main>
    );
}
