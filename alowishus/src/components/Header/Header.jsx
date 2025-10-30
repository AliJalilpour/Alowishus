import { useState } from "react";
import MobileMenu from "./MobileMunu";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="container mx-auto px-5 mt-6">
            {/* wrapper */}
            <div className="flex items-center justify-between">
                {/* logo */}
                <a href="#" className="w-25 lg:w-28 xl:w-31.5">
                    <img src="/image/logo.png" alt="logo" />
                </a>
                {/* navigation */}
                <div className="flex items-center gap-x-10">
                    <nav className="hidden md:flex items-center md:gap-x-5 lg:gap-x-10 font-medium lg:text-base text-eerie-black *:relative *:after:content-[''] *:after:absolute *:after:left-0 *:after:-bottom-2 *:after:w-0 *:after:h-0.5 *:after:bg-eerie-black *:after:transition-all *:after:duration-300 *:after:delay-75 *:hover:after:w-full">
                        <a href="#">Cafe Munu</a>
                        <a href="#">About Us</a>
                        <a href="#">Find Us</a>
                        <a href="#">Alowishus Catering</a>
                    </nav>
                    {/* shopping box & gift*/}
                    <div className="flex items-center gap-x-2.5 lg:gap-x-5">
                        {/* shopping box */}
                        <a href="#" className="rounded-full flex items-center justify-center max-sm:p-2 sm:p-3 xl:p-4 bg-white hover:text-white hover:bg-eerie-black transition-all duration-300 delay-75 shadow-2xl z-0">
                            <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8.13201 2.50391L4.42001 8.99991H3.00001C2.68801 8.99991 2.39501 9.14591 2.20501 9.39291C2.01601 9.64091 1.95301 9.96291 2.03501 10.2629L4.83401 20.5259C5.07001 21.3939 5.86401 21.9999 6.76401 21.9999H17.237C18.135 21.9999 18.929 21.3949 19.167 20.5249L21.966 10.2619C22.048 9.96191 21.986 9.63991 21.796 9.39191C21.605 9.14591 21.312 8.99991 21 8.99991H19.58L15.868 2.50391L14.132 3.49591L17.277 8.99991H6.72301L9.86801 3.49591L8.13201 2.50391ZM14 12.9999H16V17.9999H14V12.9999ZM8.00001 12.9999H10V17.9999H8.00001V12.9999Z"/>
                            </svg>
                        </a>
                        {/* gift */}
                        <div className="max-md:hidden">
                            <a href="#" className="rounded-full flex items-center justify-center max-sm:p-2 sm:p-3 lg:hidden bg-eerie-black hover:text-eerie-black hover:bg-white text-white transition-all duration-300 delay-75 shadow-2xl">
                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                            </a>
                            <a href="#"className="bg-eerie-black hidden items-center justify-center lg:flex lg:py-3 xl:py-3.75 px-7.5 text-white lg:text-sm xl:text-base/6.5 font-medium rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75 shadow-2xl">
                                BUY GIFT VOUCHERS
                            </a>
                        </div>
                        {/* bars */}
                        <button type="button" onClick={()=> setOpen(!open)} className="cursor-pointer">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="max-sm:size-8 sm:size-10 md:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <MobileMenu open={open} setOpen={setOpen} />
        </header>
    )
}
export default Header;