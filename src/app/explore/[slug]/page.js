export default function ExplorePage({ params }) {
  const slug = params?.slug;

  const title = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      <p className="text-gray-700 leading-7">
        Discover our travel options for <strong>{title}</strong>. Blooming Cart
        offers curated experiences and services designed to meet your travel
        needs.
      </p>
    </div>
  );
}
