export default function FirstSection() {
    return (
        <section className="md:flex mt-[155px] mb-[200px] sm:mb-[341px] mx-auto ">
            <div className="relative md:w-[40%]">
                <img src="/peter.png" alt="Vercel Logo" className="bg-cover w-full md:h-[327px]  xl:h-[497px]" />
                <div className="md:w-[130px] xl:w-[220px] w-[30%] md:h-[130px] xl:h-[220px] h-[30%] md:top-[109px] top-[36%] xl:top-[140px] md:left-[90px] md:left-[90px] left-[35%]  lg:left-[90px] xl:left-[148px] absolute bg-white rounded-full opacity-[0.68]"></div>
                <img src="/Polygon 1.png" alt="Vercel Logo" className="xl:top-[210px] md:top-[150px] top-[45%] md:left-[135px] left-[44%] xl:left-[226px] xl:w-[82px] w-[13%] md:w-[52px] md:h-[52px] xl:h-[71px] h-[13%] bg-cover bg-center absolute" />
            </div>
            <div className="lg:ml-[45px] md:w-[60%] md:ml-[33px] lg:mt-[31px]">
                <p className="font-black lg:text-[30px] text-[25px] xl:text-[64px] xl:leading-[70.4px] tracking-[-0.025em]">Gather data to offer a bespoke solution</p>
                <p className="font-raleway text-[17px] xl:text-[28px] mt-[7px] lg:w-[500px] xl:w-[736px] lg:leading-[40px] tracking-[-0.01em]">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</p>
                <div className="flex">
                    <img src="/user5.png" alt="Vercel Logo" className="mt-7 w-[64px] h-[64px] " />
                    <div className="mt-8 bg-cover ml-5">
                        <strong className="font-lato text-[16px] sm:text-[28px] sm:leading-[28px] tracking-[-0.01em]">Rachel Dawson</strong>
                        <p className="font-raleway mt-[10px] text-[12px] sm:text-[18px] sm:leading-[18px] tracking-[-0.01em]">CEO, Globex Workspaces</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
