const Explore = () => {
    return (
        <section className="relative">
            {/* wrapper */}
            <img className="absolute top-5 max-xl:hidden" src="/image/24 1.png" alt="coffee" />
            <div className="container mx-auto px-5">
                <div className="max-xl:pt-20 xl:pt-37.5 max-md:mb-15 md:mb-22.5 flex flex-col items-center">
                    <h2 className="font-jost font-extrabold max-md:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-eerie-black mb-6">Explore Our Alowishus</h2>
                    <p className="font-jost md:text-xl xl:text-2xl text-granite-gray max-w-150 text-center">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
                </div>
                {/* order & menu & discover more */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-10 md:gap-7.5">
                    {/* order cathering */}
                    <div className="flex flex-col justify-between items-center rounded-3xl shadow-2xl bg-white max-lg:p-8 lg:py-5 lg:px-10 xl:p-10">
                        <div className="max-md:mb-10 md:mb-5 lg:mb-10 xl:mb-15">
                            <h3 className="font-jost font-semibold max-md:text-2xl md:text-3xl xl:text-4xl text-eerie-black mb-2">Our Catering</h3>
                            <p className="font-jost max-md:text-lg  md:text-xl xl:text-2xl text-granite-gray">Alowishus Catering, delicious drop off Catering</p>
                        </div>
                        <div className="flex flex-col items-center">                            
                            <div className="max-md:w-23 md:w-25 lg:w-30 xl:w-40 max-md:mb-10 md:mb-15 lg:mb-10 xl:mb-15">
                                <img src="/image/food.png" alt="order" />
                            </div>
                            <a href="#" className="text-white font-jost font-medium md:text-sm lg:text-base xl:text-lg flex py-3.75 px-7.5 rounded-full bg-eerie-black hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">ORDER CATHERING</a>
                        </div>
                    </div>
                    {/* food menu */}
                    <div className="flex flex-col justify-between items-center rounded-3xl shadow-2xl bg-white max-lg:p-8 lg:py-5 lg:px-10 xl:p-10">
                        <div className="max-md:mb-10 md:mb-5 lg:mb-10 xl:mb-15">
                            <h3 className="font-jost font-semibold max-md:text-2xl md:text-3xl xl:text-4xl text-eerie-black mb-2">The Food</h3>
                            <p className="font-jost max-md:text-lg md:text-xl xl:text-2xl text-granite-gray">Our entire menu is available as dine in or takeaway.</p>
                        </div>
                        <div className="flex flex-col items-center">                            
                            <div className="max-md:w-23 md:w-25 lg:w-30 xl:w-40 max-md:mb-10 md:mb-15 lg:mb-10 xl:mb-15">
                                <img src="/image/fast-food.png" alt="order" />
                            </div>
                            <a href="#" className="text-white font-jost font-medium md:text-sm lg:text-base xl:text-lg flex py-3.75 px-7.5 bg-eerie-black  rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">FOOD MENU</a>
                        </div>
                    </div>
                    {/* discover more */}
                    <div className="flex flex-col justify-between items-center rounded-3xl shadow-2xl bg-white max-lg:p-8 lg:py-5 lg:px-10 xl:p-10">
                        <div className="max-md:mb-10 md:mb-5 lg:mb-10 xl:mb-15">
                            <h3 className="font-jost font-semibold max-md:text-2xl md:text-3xl xl:text-4xl text-eerie-black mb-2">The Gelato</h3>
                            <p className="font-jost max-md:text-lg md:text-xl xl:text-2xl text-granite-gray">Life is like GELATO, enjoy it before it melts.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="max-md:w-23 md:w-25 lg:w-30 xl:w-40 max-md:mb-10 md:mb-15 lg:mb-10 xl:mb-15">
                                <img src="/image/ice-cream.png" alt="order" />
                            </div>
                            <a href="#" className="text-white font-jost font-medium md:text-sm lg:text-base xl:text-lg flex py-3.75 px-7.5 bg-eerie-black rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">DISCOVER MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )}
export default Explore;