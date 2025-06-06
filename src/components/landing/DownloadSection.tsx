import Image from "next/image";

export default function DownloadSection() {
    return (
        <section className="bg-themecolor rounded-2xl py-12 px-6 text-white text-center max-w-5xl mx-auto my-16">
            <h2 className="text-2xl md:text-3xl font-bold   mb-2">Meet more locals</h2>
            <p className="text-white/90 text-base md:text-lg   mb-6">
                Download the App to connect with customers today!
            </p>

            <div className="flex justify-center items-center gap-4 flex-wrap">
                {/* Google Play */}
                <a
                    href="https://example.com/lb-partner-app-download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/google-play-download.png"
                        alt="Get it on Google Play"
                        width={160}
                        height={48}
                        className="clickeffect"
                    />
                </a>

                {/* App Store */}
                <a
                    href="https://example.com/lb-partner-app-download"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/app-store-download.png"
                        alt="Download on the App Store"
                        width={160}
                        height={48}
                        className="clickeffect"
                    />
                </a>
            </div>
        </section>
    );
}
