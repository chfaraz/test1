export default function Numbers({ number, title }) {
    return (
        <div className="lg:px-[0] text-center my-[30px] md:my-[0] px-[10px]">
            <h1 className="font-black text-[30px] lg:text-[45px] xl:text-[64px] my-[10px] font-lato leading-[64px]">{number}</h1>
            <p className="text-[28px] font-raleway leading-[28px]">{title}</p>
        </div>
    );
}
