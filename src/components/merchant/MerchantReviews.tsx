import { IoStar } from "react-icons/io5";

export default function MerchantReviews() {
  return (
    <div id="reviews" className="px-10 py-6">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>

      {/* Rating Breakdown */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold text-themecolor">4.7</div>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <IoStar key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <span className="text-gray-600">(190)</span>
        </div>

        {/* Rating bars */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm w-4">{rating}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-themecolor h-2 rounded-full"
                  style={{
                    width: rating === 5 ? "80%" : rating === 4 ? "15%" : "5%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
