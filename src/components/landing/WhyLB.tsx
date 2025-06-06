import Image from "next/image";

const features = [
    {
        title: "Smart visibility",
        description: "Get discovered by local customers actively looking for services like yours.",
        image: "/images/smart-visibility.jpg",
    },
    {
        title: "Dynamic offers",
        description: "Use AI-powered pricing to attract customers during slow hours.",
        image: "/images/dynamic-offers.jpg",
    },
    {
        title: "Cashback loyalty",
        description: "Keep them coming back with our points-based cashback rewards system.",
        image: "/images/cashback-loyalty.jpg",
    },
];

export default function WhyLB() {
    return (
        <section className="py-16 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Local Bestie works</h2>
            <p className="text-themecolor font-semibold mb-10">Built for local businesses like yours</p>

            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
                {features.map((item, i) => (
                    <div key={i} className="space-y-4">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={280}
                            height={180}
                            className="mx-auto"
                        />
                        <h3 className="font-semibold   text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm  ">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
