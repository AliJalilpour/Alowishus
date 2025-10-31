const Introduction = () => {
    return (
        <section>
            {/* wrapper */}
            <div className="flex items-center justify-between">
                {/* introduction */}
                <div className="flex-1">
                    <div>
                        <h1 className="font-jost font-extrabold text-9xl text-eerie-black">Alowishus Delicious Coffee</h1>
                        <span>
                            <img src="/image/image 3.png" alt="cafe" />
                        </span>
                        <p className="font-jost text-2xl text-granite-gray">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
                    </div>
                    {/* buttons */}
                    <div className="font-jost font-medium text-lg flex items-center gap-x-7.5 mt-15">
                        <a href="#" className="flex items-center justify-center py-5 px-10 bg-eerie-black text-white rounded-full">DOWNLOAD APP</a>
                        <a href="#" className="text-eerie-black relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-eerie-black">SHOP COFFEE</a>
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