import Image from "next/image";

const steps = [
  {
    step: "Step 1",
    title: "Customer pays in app",
    description:
      "User enters the amount in LB app. You both get a unique verification code.",
    image: "/images/step1.png",
  },
  {
    step: "Step 2",
    title: "Auto cashback issued",
    description:
      "Cash back points go to the customer account – no need to track or print anything.",
    image: "/images/step2.png",
  },
  {
    step: "Step 3",
    title: "You get paid fast",
    description:
      "Funds are securely transferred to your account. Easy accounting.",
    image: "/images/step3.png",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#E7E3E2] py-20 sm:py-24 px-6 text-center md:px-8 lg:px-24">
      <h2 className="text-4xl sm:text-3xl font-bold mb-4">How it works</h2>
      <p className="text-themecolor text-xl sm:text-lg font-semibold mb-10">
        Simple. Powerful. No staff training required.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center space-y-4 max-w-sm mx-auto"
          >
            <div className="flex justify-center items-center w-20 h-20">
              <Image
                src={step.image}
                alt={step.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-themecolor font-semibold">{step.step}</p>
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p className="leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}