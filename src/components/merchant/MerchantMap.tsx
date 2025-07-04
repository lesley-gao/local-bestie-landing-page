interface MerchantMapProps {
  lat: number;
  lng: number;
}

export default function MerchantMap({ lat, lng }: MerchantMapProps) {
  return (
    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
      <iframe
        className="w-full h-full rounded-lg"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`}
      ></iframe>
    </div>
  );
}
