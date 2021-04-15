export default function Card({ title, icon, padding }) {
    return (
        <section className={`rounded shadow-lg w-[100%] md:w-[45%] lg:w-[29%] xl:w-[20%] mx-[10px] p-[24px] bg-white ${padding} `}>
            <h1 className="font-lato font-bold text-[22px] md:text-[32px] ">{title}</h1>
            <div className="relative">

            <img src={`/${icon}`} alt="Vercel Logo" className="w-[48px] h-[48px] float-right" />
            </div>
        </section>
    );
}
