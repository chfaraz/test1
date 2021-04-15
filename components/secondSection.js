export default function SecondSection({ title, text, link, img, right, left, position, children, margintop }) {
    return (
        <section className={`md:flex sm:flex sm:flex-col md:flex-row justify-center  ${margintop}`}>
            {left ? (
                <div className="relative md:w-[33%]" >
                    <img src={`/${img}`} alt="Vercel Logo" className=" bg-cover" />
                    <div className={`   h-[173px] rounded shadow-md absolute bottom-[-86px] ${position}`}>{children}</div>
                </div>
            ) : null}
            <div className={`${left ? 'xl:ml-20 lg:ml-6' : 'xl:mr-20 lg:mr-6'} md:w-[63%] container md:ml-[20px] xl:mt-[55px] md:mt-[0px] mt-[100px]  hidden md:block `}>
                <h1 className="text-[28px] lg:text-[40px] xl:text-[64px] lg:leading-[70.4px] tracking-[-0.025em] font-lato font-black">{title}</h1>
                <p className="mt-[32px] font-raleway mb-[40px] lg:text-[20px] xl:text-[28px] lg:leading-[39.2px] tracking-[-0.01em]">{text}</p>
                <a className=" text-[#D53F8C] font-semibold text-[24px] leading-[28.8px] tracking-[-0.01em]">
                    <span className="underline">{link}</span> &#62;
                </a>
            </div>
            {right ? (
                <div className="relative md:w-[33%]">
                    <img src={`/${img}`} alt="Vercel Logo" className=" bg-cover" />
                    <div className={`bg-white  rounded shadow-md absolute bottom-[-86px] ${position}`}>{children}</div>
                </div>
            ) : null}
            <div className={`${left ? 'xl:ml-20 lg:ml-6' : 'xl:mr-20 lg:mr-6'} md:w-[63%] md:mt-[0px] mt-[115px] block md:hidden`}>
                <h1 className="text-[28px] lg:text-[40px] xl:text-[64px] lg:leading-[70.4px] tracking-[-0.025em] font-lato font-black">{title}</h1>
                <p className="sm:mt-[32px] mt-[8px] font-raleway mb-[40px] lg:text-[20px] xl:text-[28px] lg:leading-[39.2px] tracking-[-0.01em]">{text}</p>
                <a className=" text-[#D53F8C] font-semibold text-[24px] leading-[28.8px] tracking-[-0.01em]">
                    <span className="underline">{link}</span> &#62;
                </a>
            </div>
        </section>
    );
}
