export const metadata = {
  title: "Careers | Blooming-Cart",
  description: "Join Blooming-Cart and grow your career with us.",
};

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Build beautiful, responsive user interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Create intuitive user experiences and visually appealing interfaces for our e-commerce platform.",
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Lead product strategy and development for our growing e-commerce platform.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Develop and execute marketing campaigns to grow our customer base.",
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Support",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Ensure customer satisfaction and drive retention through exceptional support.",
    },
  ];

  return (
    <section className="w-full bg-[#fffaf7]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Bloomify Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-16">
            <nav className="text-sm text-gray-200 mb-4">Home / Careers</nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Grow With Us
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Join our mission to revolutionize e-commerce. We're looking for
              passionate individuals to help build the future of online
              shopping.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#1c502b] mb-2">
              50+
            </div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2a5c39] mb-2">
              15+
            </div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2a5c39] mb-2">
              100K+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2a5c39] mb-2">
              5+
            </div>
            <div className="text-gray-600">Years Growing</div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B63C6] mb-6">
            Why Join Blooming-Cart?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                At Blooming-Cart, we're not just building an e-commerce platform
                - we're creating an ecosystem that empowers businesses and
                delights customers. Our culture is built on innovation,
                collaboration, and continuous learning.
              </p>
              <div className="space-y-4">
                {[
                  "Work on cutting-edge technology with talented peers",
                  "Make a real impact on millions of users worldwide",
                  "Flexible work hours and locations",
                  "Transparent and inclusive company culture",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-[#2a5c39] mr-3 mt-1">✓</div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#f0f7f2] text-[#2a5c39] rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-3 bg-[#2a5c39] text-white font-semibold rounded-lg hover:bg-[#1e452a] transition-colors">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-6">📅 Posted 2 days ago</span>
                <span>⭐ {job.experience} experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
