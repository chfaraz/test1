export default function Button({ children, background }) {
    return <button className={`${background} md:py-4 rounded text-white text-lg my-6 lg:w-[80%] w-full`}>{children}</button>;
}
