// components/Testimonials.jsx
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        name: "Imam White",
        image: "/image/Mask group1.png",
        rating: 5,
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },  
    {   
        name: "Sarah Simons",
        image: "/image/Mask group.png",
        rating: 5,
        text: "Exercitation veniam consequat sunt nostrud amet. Velit officia.",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
    const t = testimonials[index];
    return (
        <section className="w-full max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left side - Testimonial Card */}
            <div className="flex gap-6 overflow-hidden">
                <div className="bg-white shadow-xl rounded-2xl p-6 w-80 shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-60 object-cover rounded-xl mb-4" />
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                        <div className="flex text-yellow-400 mb-2">
                            {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} size={18} fill="currentColor" />))}
                        </div>
                    <p className="text-gray-600 text-sm">{t.text}</p>
                </div>
            </div>

            {/* Right side - Heading & Controls */}
            <div className="flex flex-col items-start">
                <h2 className="text-4xl font-bold mb-2">What Our Customers Say</h2>
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-semibold">4.9</span>
                    <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={16} fill="currentColor" />))}
                    </div>
                    <p className="text-gray-500 text-sm ml-2">based on 2452+ reviews</p>
                </div>

                <div className="flex gap-3">
                    <button onClick={prev} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100">
                        <ArrowLeft size={20} />
                    </button>
                    <button onClick={next} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;