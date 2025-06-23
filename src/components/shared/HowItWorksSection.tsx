import Image from "next/image";

export type StepItem = {
  step?: string;      
  title: string;
  description: string;
  image: string;
};

type HowItWorksSectionProps = {
  title: string;
  subtitle?: string;
  steps: StepItem[];
  variant?: "business" | "customer";
};

export default function HowItWorksSection({ 
  title, 
  subtitle, 
  steps, 
  variant = "business" 
}: HowItWorksSectionProps) {
  return (
    <section className="bg-[#E7E3E2] py-20 sm:py-24 px-6 text-center md:px-8 lg:px-24">
 
      <h2 className={`text-4xl sm:text-3xl font-bold ${subtitle ? "mb-4" : "mb-10"}`}>{title}</h2>
      {subtitle && (
        <p className="text-themecolor text-xl sm:text-lg font-semibold mb-10">
          {subtitle}
        </p>
      )}
      
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
            

            {step.step && variant === "business" && (
              <p className="text-themecolor font-semibold">{step.step}</p>
            )}
            
            <h3 className="font-bold text-lg">{step.title}</h3>
            <p className="leading-relaxed text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}