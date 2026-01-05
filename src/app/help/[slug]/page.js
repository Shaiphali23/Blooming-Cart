export default function HelpPage({ params }) {
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      <p className="text-gray-700 leading-7">
        Need help with <strong>{title}</strong>? Our support team is here to
        assist you with clear policies and fast resolutions.
      </p>
    </div>
  );
}
