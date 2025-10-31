const Introduction = () => {
    return (
        <section>
            {/* wrapper */}
            <div className="flex flex-col-reverse md:flex-row md:items-center gap-y-10 md:justify-between pb-40">
                {/* introduction */}
                <div className="flex-1 ">
                    <div>
                        <span className="font-jost font-extrabold max-sm:w-80 max-sm:text-6xl sm:text-8xl md:text-6xl lg:text-8xl xl:text-9xl text-eerie-black">Alowishus Delicious Coffee</span>
                        <div className="inline-flex ml-5 md:w-10 lg:w-15 xl:w-20">
                            <img src="/image/image 3.png" alt="cafe" />
                        </div>
                        <p className="font-jost text-xl xl:text-2xl text-granite-gray max-lg:my-5 lg:my-5 max-md:max-w-85 md:max-w-100 xl:max-w-132.5">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
                    </div>
                    {/* buttons */}
                    <div className="font-jost font-medium max-sm:text-sm md:text-base lg:text-base xl:text-lg flex items-center gap-x-7.5">
                        <a href="#" className="flex items-center justify-center max-sm:px-5 md:py-4 max-md:py-3 xl:py-5 px-10 bg-eerie-black text-white rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">DOWNLOAD APP</a>
                        <a href="#" className="text-eerie-black relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-eerie-black after:transition-all after:duration-300 after:delay-75 hover:after:w-full">SHOP COFFEE</a>
                    </div>
                </div>
                {/* image */}
                <div className="flex-1">
                    <img src="/image/Group 7.jpg" alt="coffee" />
                </div>
            </div>
        </section>
    )
}
export default Introduction;