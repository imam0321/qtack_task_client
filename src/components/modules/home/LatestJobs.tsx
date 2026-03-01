import Link from "next/link";
import Image from "next/image";

const latestJobs = [
  {
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    icon: "/icons/vodafone.svg",
    iconBg: "bg-emerald-100",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "Brand Designer",
    company: "Netlify",
    location: "Paris, France",
    icon: "/icons/intel.svg",
    iconBg: "bg-sky-100",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "Interactive Developer",
    company: "Dropbox",
    location: "San Francisco, USA",
    icon: "/icons/tesla.svg",
    iconBg: "bg-blue-50",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "HR Manager",
    company: "Maze",
    location: "San Francisco, USA",
    icon: "/icons/amd.svg",
    iconBg: "bg-blue-600",
    isSpin: true,
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "Social Media Assistant",
    company: "Terraform",
    location: "Hamburg, Germany",
    icon: "/icons/talkit.svg",
    iconBg: "bg-cyan-100",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "Brand Designer",
    company: "Udacity",
    location: "Hamburg, Germany",
    iconText: "U",
    iconBg: "bg-sky-500 text-white font-black text-2xl",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "Interactive Developer",
    company: "Packer",
    location: "Lucern, Switzerland",
    iconBg: "bg-red-100",
    iconDot: "bg-red-500",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  },
  {
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    iconText: "W",
    iconBg: "bg-indigo-600 text-white font-black text-2xl",
    tags: ["Full-Time", "Marketing", "Design"],
    isFullTime: true
  }
];

export default function LatestJobs() {
  return (
    <section className="lg:px-31 px-4 py-6">
      
       <div className="flex flex-col sm:flex-row justify-between items-start md:mb-6 mb-2 gap-4">
        <h2 className="md:text-5xl text-[2rem] font-semibold font-clash-display">
          Latest <span className="text-[#26A4FF]">jobs open</span>
        </h2>

        {/* Link */}
        <Link
          href="#"
          className="text-[#4640DE] font-semibold md:flex items-center md:mt-2 hidden"
        >
          Show all jobs
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {latestJobs.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start lg:items-center hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group">
            <div className={`w-16 h-16 shrink-0 ${job.iconBg} rounded-2xl flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 transition-transform group-hover:scale-110 duration-300`}>
              {job.icon ? (
                <Image src={job.icon} alt={job.company} width={32} height={32} className={`object-contain w-auto h-auto ${job.isSpin ? 'animate-spin-slow' : ''}`} />
              ) : job.iconDot ? (
                <div className={`w-8 h-8 rounded-lg ${job.iconDot}`}></div>
              ) : (
                <span className="font-black text-2xl">{job.iconText}</span>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{job.company} • {job.location}</p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Full-Time
                </span>
                <span className="border border-yellow-200 text-yellow-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Marketing
                </span>
                <span className="border border-blue-100 text-blue-600 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Design
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
