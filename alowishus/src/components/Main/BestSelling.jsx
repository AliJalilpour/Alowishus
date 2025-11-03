const BestSelling = () => {
    return (
        <section>
            {/* wrapper */}
            <div>
                {/* information */}
                <div>
                    <h2 className="font-jost font-extrabold max-md:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-eerie-black mb-6 text-center">Best Selling Coffee</h2>
                    <p className="font-jost md:text-xl xl:text-2xl text-granite-gray max-w-150 text-center">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
                </div>
                {/* best selling coffee */}
                <div>
                    {/* 1 */}
                    <div>
                        {/* image */}
                        <div>
                            <div>
                                <img src="/image/2.png" alt="coffee-1" />
                            </div>
                            <div>
                                <span>#1 Selling</span>
                                <h4>Double Espresso</h4>
                            </div>
                        </div>
                        {/* information */}
                        <div>
                            <p>Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>
                        {/* order */}
                        <div>
                            <span>$59.99</span>
                            <a href="#">ORDER NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BestSelling;