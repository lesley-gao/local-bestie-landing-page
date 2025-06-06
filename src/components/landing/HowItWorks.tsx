import Image from "next/image";

const steps = [
    {
        step: "Step 1",
        title: "Customer pays in app",
        description: "User enters the amount in LB app. You both get a unique verification code.",
        image: "/images/step1.png",
    },
    {
        step: "Step 2",
        title: "Auto cashback issued",
        description: "Cash back points go to the customer account – no need to track or print anything.",
        image: "/images/step2.png",
    },
    {
        step: "Step 3",
        title: "You get paid fast",
        description: "Funds are securely transferred to your account. Easy accounting.",
        image: "/images/step3.png",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="bg-[#E7E3E2] py-16 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold   mb-2">How it works</h2>
            <p className="text-themecolor   mb-10">
                Simple. Powerful. No staff training required.
            </p>

            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
                {steps.map((step, index) => (
                    <div key={index} className="space-y-4">
                        <Image
                            src={step.image}
                            alt={step.title}
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                        <p className="text-themecolor font-semibold  ">{step.step}</p>
                        <h3 className="font-semibold text-lg  ">{step.title}</h3>
                        <p className="text-sm  ">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
