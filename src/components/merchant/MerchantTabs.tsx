export default function MerchantTabs() {
  return (
    <div className="flex bg-white border-b-1">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="px-10 py-5 text-lg font-bold hover:text-themecolor border-b-2 border-transparent hover:border-themecolor transition-colors"
      >
        Overview
      </button>
      <button
        onClick={() =>
          document
            .getElementById("menu")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-10 py-5 text-lg font-bold hover:text-themecolor border-b-2 border-transparent hover:border-themecolor transition-colors"
      >
        Menu
      </button>
      <button
        onClick={() =>
          document
            .getElementById("reviews")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-10 py-5 text-lg font-bold hover:text-themecolor border-b-2 border-transparent hover:border-themecolor transition-colors"
      >
        Reviews
      </button>
    </div>
  );
}
