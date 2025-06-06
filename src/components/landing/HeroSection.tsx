import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-themecolor text-white py-24 px-8">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                {/* Left: Text */}
                <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
                        More customers. <br />
                        Smarter promotions. <br />
                        Zero hassle.
                    </h1>
                    <p className="md:text-lg text-white/90 ">
                        Join Local Bestie – the AI-powered marketing platform that fills your quiet hours, builds loyalty,
                        and turns one-time visitors into regulars.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 pt-2">
                        <a
                            href="#"
                            className="inline-block font-semibold bg-white text-themecolor px-8 py-3 rounded-md hover:opacity-90 clickeffect transition"
                        >
                            Join for Free
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 text-white/90 hover:text-white hover:border clickeffect transition "
                        >
                            <AiOutlinePlayCircle className="text-xl" />
                            View Demo
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-2/5">
                    <div className="relative w-[300px] md:w-[360px] aspect-3/4 mx-auto rounded-2xl overflow-hidden">
                        <Image
                            src="/images/hero-img.jpg"
                            alt="Customers dining happily"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
