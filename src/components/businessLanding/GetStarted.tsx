import { BiCheckCircle } from "react-icons/bi";

export default function GetStarted() {
  const benefits = [
    "No setup fee",
    "No monthly cost",
    "Small success fee per in-app payment",
  ];

  return (
    <section className="bg-themecolor text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-8 lg:px-24">
        <div className="text-left space-y-6 max-w-md">
          <h2 className="text-4xl md:text-3xl font-bold">Get started</h2>
          <p className="text-white/90 text-xl sm:text-lg">
            Start free. Pay only when you win.
          </p>
          <a
            href="#download"
            className="inline-block border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-themecolor clickeffect transition"
          >
            Become a Local Bestie Partner
          </a>
        </div>

        {/* Desktop screen */}
        <div className="hidden md:block bg-[#E7E3E2] rounded-xl p-6 space-y-4 w-full max-w-md">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-3">
              <BiCheckCircle className="text-3xl text-themecolor flex-shrink-0" />
              <p className="text-black font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile screen */}
      <div className="md:hidden bg-[#E7E3E2] mt-8 py-6 space-y-4">
        <div className="px-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 mb-4 last:mb-0"
            >
              <BiCheckCircle className="text-3xl text-themecolor flex-shrink-0" />
              <p className="text-black font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
