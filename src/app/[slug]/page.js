import { footerLinks } from "../assets/data/footerLinks";
// adjust path

export default async function FooterStaticPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    return <p>Page not found</p>;
  }

  // Flatten all footer links into one array
  const allLinks = Object.values(footerLinks).flat();

  // Match slug against href
  const matchedLink = allLinks.find(
    (link) => link.href.replace("/", "") === slug
  );

  if (!matchedLink) {
    return <p>Page not found</p>;
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{matchedLink.label}</h1>
      <p className="text-gray-700">
        Welcome to {matchedLink.label}
      </p>
    </div>
  );
}
