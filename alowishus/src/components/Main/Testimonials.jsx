import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function Testimonials() {
  const [isFirstVisible, setIsFirstVisible] = useState(true);

  const handleNext = () => setIsFirstVisible(false);
  const handlePrev = () => setIsFirstVisible(true);

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Left Side - Testimonial Cards */}
      <div className="relative w-full md:w-2/3 flex items-center overflow-hidden">
        <div
          className={`flex gap-6 transition-transform duration-700 ease-in-out`}
          style={{
            transform: isFirstVisible ? "translateX(0%)" : "translateX(-50%)",
          }}
        >
          {/* --- CARD 1 --- */}
          <div className="bg-white shadow-lg rounded-3xl p-6 w-80 flex-shrink-0 transition-all duration-500">
            <img
              src="/image/Mask group.png"
              alt="Sarah Simons"
              className="w-full h-60 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-lg font-semibold">Sarah Simons</h3>
            <div className="flex text-yellow-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.”
            </p>
          </div>

          {/* --- CARD 2 --- */}
          <div className="bg-white shadow-lg rounded-3xl p-6 w-80 flex-shrink-0 transition-all duration-500">
            <img
              src="/image/Mask group1.png"
              alt="Imam White"
              className="w-full h-60 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-lg font-semibold">Imam White</h3>
            <div className="flex text-yellow-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              “Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint.”
            </p>
          </div>
        </div>

        {/* افکت محو برای نیمه دیده شدن کارت بعدی */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Right Side - Heading & Controls */}
      <div className="flex flex-col items-start md:w-1/3">
        <h2 className="text-4xl font-bold mb-2">What Our Customers Say</h2>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-semibold">4.9</span>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-500 text-sm ml-2">based on 2452+ reviews</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}