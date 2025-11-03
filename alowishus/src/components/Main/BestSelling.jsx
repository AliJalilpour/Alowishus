const BestSelling = () => {
    return (
        <section className="relative">
            <img className="absolute -top-50 right-0 max-xl:hidden" src="/image/24 2.png" alt="img" />
            {/* wrapper */}
            <div className="container mx-auto mt-20 px-5">
                {/* information */}
                <div className="flex flex-col items-center mb-20">
                    <h2 className="font-jost font-extrabold max-md:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-eerie-black mb-6 text-center">Best Selling Coffee</h2>
                    <p className="font-jost md:text-xl xl:text-2xl text-granite-gray max-w-150 text-center">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
                </div>
                {/* best selling coffee */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* 1 */}
                    <div className="flex flex-col justify-between lg:p-3 xl:p-9 shadow-2xl rounded-3xl max-lg:h-90 lg:h-100 xl:h-120">
                        {/* image */}
                        <div className="flex items-center gap-x-5">
                            <div className="w-30">
                                <img src="/image/2.png" alt="coffee-1" />
                            </div>
                            <div>
                                <span className="font-jost font-medium text-xl text-granite-gray">#1 Selling</span>
                                <h4 className="font-jost font-semibold text-4xl text-eerie-black">Double Espresso</h4>
                            </div>
                        </div>
                        {/* information */}
                        <div>
                            <p className="font-jost text-xl text-granite-gray">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>
                        {/* order */}
                        <div className="flex items-center gap-x-10 md:justify-between">
                            <span className="font-jost font-medium max-xl:text-2xl xl:text-3xl text-eerie-black">$59.99</span>
                            <a href="#" className="text-white font-jost font-medium md:text-sm lg:text-base xl:text-lg flex py-3.75 px-7.5 bg-eerie-black  rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">ORDER NOW</a>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col justify-between lg:p-3 xl:p-9 shadow-2xl rounded-3xl max-lg:h-90 lg:h-100 xl:h-120">
                        {/* image */}
                        <div className="flex items-center gap-x-5">
                            <div className="w-30">
                                <img src="/image/3.png" alt="coffee-1" />
                            </div>
                            <div>
                                <span className="font-jost font-medium text-xl text-granite-gray">#2 Selling</span>
                                <h4 className="font-jost font-semibold text-4xl text-eerie-black">Caramel Frappe</h4>
                            </div>
                        </div>
                        {/* information */}
                        <div>
                            <p className="font-jost text-xl text-granite-gray">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>
                        {/* order */}
                        <div className="flex items-center gap-x-10 md:justify-between">
                            <span className="font-jost font-medium max-xl:text-2xl xl:text-3xl text-eerie-black">$59.99</span>
                            <a href="#" className="text-white font-jost font-medium md:text-sm lg:text-base xl:text-lg flex py-3.75 px-7.5 bg-eerie-black  rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">ORDER NOW</a>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col justify-between lg:p-3 xl:p-9 shadow-2xl rounded-3xl max-lg:h-90 lg:h-100 xl:h-120">
                        {/* image */}
                        <div className="flex items-center gap-x-5">
                            <div className="w-30">
                                <img src="/image/1.png" alt="coffee-1" />
                            </div>
                            <div>
                                <span className="font-jost font-medium text-xl text-granite-gray">#3 Selling</span>
                                <h4 className="font-jost font-semibold text-4xl text-eerie-black">Iced Coffee</h4>
                            </div>
                        </div>
                        {/* information */}
                        <div>
                            <p className="font-jost text-xl text-granite-gray">Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>
                        {/* order */}
                        <div className="flex items-center gap-x-10 md:justify-between">
                            <span className="font-jost font-medium max-xl:text-2xl xl:text-3xl text-eerie-black">$59.99</span>
                            <a href="#" className="text-white font-jost font-medium md:text-sm lg:text-base xl:text-lg flex py-3.75 px-7.5 bg-eerie-black  rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">ORDER NOW</a>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    )
}
export default BestSelling;