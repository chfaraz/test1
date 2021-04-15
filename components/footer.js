export default function Footer() {
    return (
        <footer className=" mx-auto mt-[200px] md:mt-[295px] container mx-auto pb-[40px]">
            <img src="/Group 690.svg" alt="Vercel Logo" className="  h-[92px] mx-auto" />
            <p className="text-[24px] font-lato font-black text-center mt-[20px] mb-[40px] leading-[24px] tracking-[-0.03em]">Build. Review. Ship.</p>
            <ul className="flex justify-center font-manrope text-[16px] leading-[26px] mb-[24px]">
                <li className="mr-5">Download Now</li>
                <li>License</li>
            </ul>
            <ul className="sm:flex text-center justify-around font-manrope text-[16px] leading-[26px] sm:w-[471px] mx-auto mb-[22px]">
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Help</li>
                <li>Privacy Policy</li>
            </ul>
            <p className="text-center font-manrope text-[14px] leading-[24px] mb-[37px]">&copy; 2020 Prodify. All rights reserved</p>
            <hr className=" mb-[45px]" />
            <div className="flex justify-center">
                <buton>
                    <img src="/Group 734.png" alt="Vercel Logo" className="mr-[16px] w-[135px] h-[40px] bg-cover" />
                </buton>
                <buton>
                    <img src="/Download Badges.png" alt="Vercel Logo" className="w-[135px] h-[40px] bg-cover" />
                </buton>
            </div>
        </footer>
    );
}
