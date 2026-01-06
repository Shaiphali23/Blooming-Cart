export const metadata = {
  title: "Careers | Bloomify",
  description: "Join Bloomify and grow your career with us.",
};

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    experience: "0–2 Years",
  },
  {
    id: 2,
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
    experience: "1–3 Years",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    experience: "0–2 Years",
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    type: "Part Time",
    location: "Remote",
    experience: "1+ Year",
  },
];

export default function JobsPage() {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Join Our Team 🌸
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We’re always looking for passionate people who love creativity,
            growth, and teamwork.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🌼</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Creative Environment
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Work with a team that values ideas and innovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🌍</span>
            <h3 className="mt-3 font-semibold text-gray-800">
              Remote Friendly
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Work from anywhere with flexible hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <span className="text-3xl">🚀</span>
            <h3 className="mt-3 font-semibold text-gray-800">Career Growth</h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn, grow, and advance your career with us.
            </p>
          </div>
        </div>

        {/* Job Openings */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Current Openings
          </h2>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {job.location} • {job.type} • {job.experience}
                  </p>
                </div>

                <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center">
          <p className="text-gray-600">Didn’t find a suitable role?</p>
          <p className="text-gray-700 font-medium">
            Send your resume to{" "}
            <span className="text-pink-500">careers@bloomify.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
