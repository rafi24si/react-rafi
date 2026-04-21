import { Link } from "react-router-dom";

export default function ErrorPage({
  code = "404",
  description = "Page not found",
  image, // optional: path gambar
}) {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="text-center max-w-lg">
        {image && (
          <img
            src={image}
            alt={`error-${code}`}
            className="w-64 mx-auto mb-6"
          />
        )}

        <h1 className="text-6xl font-bold text-gray-800">{code}</h1>

        <p className="text-gray-500 mt-3">{description}</p>

        <Link
          to="/"
          className="inline-block mt-6 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}