import Image from "next/image";

export default function AISection() {
  const features = [
    {
      icon: "/images/AI1.svg",
      title: "Dynamic pricing tool:",
      description:
        "Auto-adjust offers to drive traffic during low demand hours.",
    },
    {
      icon: "/images/AI2.svg",
      title: "AI-powered promotions:",
      description: "Launch smart deals with zero guesswork.",
    },
    {
      icon: "/images/AI3.svg",
      title: "Auto-Reply to reviews:",
      description: "Build trust, respond fast, stay professional.",
    },
    {
      icon: "/images/AI4.svg",
      title: "Performance insights:",
      description: "Understand trends and take action.",
    },
  ];

  return (
    <section className="bg-themecolor text-white py-20 sm:py-24 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-none aspect-square md:aspect-[3/2] rounded-xl overflow-hidden min-h-[300px]">
            <Image
              src="/images/AIboost.jpg"
              alt="AI tools"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left px-6 sm:px-0">
          <h2 className="text-4xl sm:text-3xl font-bold ">
            Boost revenue with AI tools
          </h2>
          <p className="text-white/90 text-xl md:text-lg ">
            AI that drives results – not just buzzwords.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-6 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-col items-center md:items-start text-center md:text-left gap-2"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image
                src={item.icon}
                alt="AI tools"
                width={40}
                height={40}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <div className="flex-1 space-y-1 text-left">
              <p className="font-semibold text-white ">{item.title}</p>
              <p className="text-white/80 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
