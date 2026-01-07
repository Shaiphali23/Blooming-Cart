// app/[slug]/page.jsx
import React from "react";

const CategoryPage = ({ params }) => {
  const { slug } = params;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {slug ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{slug}</h1>
          <p className="text-gray-600">
            Showing products for the <strong>{slug}</strong> category.
          </p>
        </>
      ) : (
        <p className="text-red-500">Category not found</p>
      )}
    </div>
  );
};

export default CategoryPage;
