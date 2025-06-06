import { GoCheckCircle } from "react-icons/go";

export default function GetStarted() {
  const benefits = [
    "No setup fee",
    "No monthly cost",
    "Small success fee per in-app payment",
  ];

  return (
    <section className="bg-themecolor text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text + CTA */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold  ">Get started</h2>
          <p className="text-white/90 text-base md:text-lg  ">
            Start free. Pay only when you win.
          </p>
          <a
            href="#"
            className="inline-block border border-white px-6 py-3 rounded-lg   font-semibold text-white hover:bg-white hover:text-themecolor clickeffect transition"
          >
            Become a Local Bestie Partner
          </a>
        </div>

        {/* Right: Checklist card */}
        <div className="flex-1 bg-[#F2F2F2] text-themeColor rounded-xl p-6 space-y-4 w-full md:max-w-md">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <GoCheckCircle className="text-xl mt-1 text-themecolor" />
              <p className="text-black font-medium  ">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
