import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-themecolor text-white py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left text block */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
                        More customers. <br />
                        Smarter promotions. <br />
                        Zero hassle.
                    </h1>
                    <p className="text-base md:text-lg text-white/90">
                        Join Local Bestie – the AI-powered marketing platform that fills your quiet hours, builds loyalty,
                        and turns one-time visitors into regulars.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                        <a
                            href="#"
                            className="inline-block font-semibold  bg-white text-themecolor px-6 py-3 rounded-md clickeffect not-first:hover:opacity-90 transition"
                        >
                            Join for Free
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition clickeffect "
                        >
                            <AiOutlinePlayCircle className="text-xl" />
                            View Demo
                        </a>
                    </div>
                </div>

                {/* Right image block */}
                <div className="flex-1">
                    <Image
                        src="/images/hero-img.jpg"
                        alt="Customers dining happily"
                        width={500}
                        height={500}
                        className="rounded-xl mx-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
