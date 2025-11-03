const Order = () => {
    return (
        <section>
            {/* wrapper */}
            <div className="sm:mt-20 lg:mt-25 xl:mt-40 container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
                {/* image */}
                <div className="flex-1 max-md:mb-10">
                    <img src="/image/Group 21.png" alt="order-coffee" />
                </div>
                {/* order */}
                <div className="flex-1 flex flex-col">
                    <div className="max-sm:mb-5 sm:mb-10 xl:mb-15">
                        <h3 className="font-jost font-extrabold  max-md:text-5xl md:text-4xl lg:text-5xl xl:text-6xl/17.5 text-eerie-black mb-3.75 lg:max-w-100 xl:max-w-125">Order Your Favourite Coffee</h3>
                        <p className="font-jost max-md:text-xl md:text-2xl text-granite-gray max-w-170">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <a href="#" className="flex max-sm:w-45 sm:w-45 lg:w-50 lg:text-base xl:text-xl items-center justify-center max-sm:px-5 max-md:py-3 md:py-4 xl:py-5 px-10 bg-eerie-black text-white rounded-full hover:bg-white hover:text-eerie-black transition-all duration-300 delay-75">ORDER NOW</a>
                </div>
            </div>
        </section>
    )
}
export default Order;