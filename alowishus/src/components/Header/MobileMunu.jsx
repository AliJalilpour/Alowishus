const MobileMenu = ({ open, setOpen }) => {
    return (
        <aside>
            {/* bars navigation */}
            <div className={`md:hidden absolute left-0 top-0 bottom-0 w-50 h-full overflow-hidden bg-bright-gray shadow-2xl px-5 py-8 transition-all duration-300 delay-75 z-20 ${open ? `translate-x-0` : `-translate-x-60`}`}>
                <nav className="flex flex-col  gap-4 font-medium text-eerie-black">
                    <a href="#">Cafe Menu</a>
                    <a href="#">About Us</a>
                    <a href="#">Find Us</a>
                    <a href="#">Catering</a>
                </nav>
            </div>
            {/* layout */}
            <div onClick={() => setOpen(false)} className={`absolute z-10 md:hidden ${open ? `top-0 right-0 bottom-0 left-0 bg-black/50` : `hidden`}`}></div>
        </aside>
    );
};

export default MobileMenu;
