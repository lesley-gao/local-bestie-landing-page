import Image from 'next/image'

export default function AISection() {
  const features = [
    {
      icon: '/images/AI1.svg',
      title: 'Dynamic pricing tool:',
      description:
        'Auto-adjust offers to drive traffic during low demand hours.',
    },
    {
      icon: '/images/AI2.svg',
      title: 'AI-powered promotions:',
      description: 'Launch smart deals with zero guesswork.',
    },
    {
      icon: '/images/AI3.svg',
      title: 'Auto-Reply to reviews:',
      description: 'Build trust, respond fast, stay professional.',
    },
    {
      icon: '/images/AI4.svg',
      title: 'Performance insights:',
      description: 'Understand trends and take action.',
    },
  ]

  return (
    <section className="bg-themecolor text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1">
          <Image
            src="/images/AIboost.jpg"
            alt="AI tools"
            width={540}
            height={360}
            className="rounded-xl"
          />
        </div>

        {/* Right: Title + Description */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins">
            Boost revenue with AI tools
          </h2>
          <p className="text-white/90 text-base md:text-lg font-poppins">
            AI that drives results – not just buzzwords.
          </p>
        </div>
      </div>

      {/* Bottom: Features */}
      <div className="max-w-7xl mx-auto mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
          >
            <Image
              src={item.icon}
              alt="AI tools"
              width={40}
              height={40}
              className="mb-2"
            />
            <p className="font-semibold text-white font-poppins">
              {item.title}
            </p>
            <p className="text-sm text-white/80 font-poppins">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
