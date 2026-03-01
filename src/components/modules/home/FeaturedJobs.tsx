import Link from "next/link";
import Image from "next/image";

const featuredJobs = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full Time",
    logoText: "R",
    logoBg: "bg-slate-100",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: ["Marketing", "Design"],
    tagColors: [
      "bg-yellow-50 text-yellow-600",
      "bg-emerald-50 text-emerald-600",
    ],
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    type: "Full Time",
    icon: "/icons/vodafone.svg",
    logoBg: "bg-blue-50",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: ["Design", "Business"],
    tagColors: ["bg-emerald-50 text-emerald-600", "bg-blue-50 text-blue-600"],
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    type: "Full Time",
    logoText: "Pitch",
    logoBg: "bg-black text-white text-[10px]",
    description:
      "Pitch is looking for Customer Manager to join marketing t ...",
    tags: ["Marketing"],
    tagColors: ["bg-yellow-50 text-yellow-600"],
  },
  {
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    type: "Full Time",
    logoBg: "bg-emerald-100",
    logoDot: "bg-emerald-500",
    description:
      "Blinkist is looking for Visual Designer to help team desi ...",
    tags: ["Design"],
    tagColors: ["bg-emerald-50 text-emerald-600"],
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    iconColor: "text-indigo-500",
    logoBg: "bg-indigo-50",
    description: "ClassPass is looking for Product Designer to help us ...",
    tags: ["Marketing", "Design"],
    tagColors: [
      "bg-yellow-50 text-yellow-600",
      "bg-emerald-50 text-emerald-600",
    ],
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    type: "Full Time",
    logoText: "Canva",
    logoBg: "bg-teal-50 text-teal-600 font-bold italic text-[10px]",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: ["Design", "Business"],
    tagColors: ["bg-emerald-50 text-emerald-600", "bg-blue-50 text-blue-600"],
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    type: "Full Time",
    logoText: "GoDaddy",
    logoBg: "bg-slate-100 text-[8px] font-bold uppercase",
    description: "GoDaddy is looking for Brand Strategist to join the team ...",
    tags: ["Marketing"],
    tagColors: ["bg-yellow-50 text-yellow-600"],
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    type: "Full Time",
    icon: "/icons/Twitter.svg",
    logoBg: "bg-sky-500",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: ["Technology"],
    tagColors: ["bg-orange-50 text-orange-600"],
  },
];

export default function FeaturedJobs() {
  return (
    <section className="lg:px-31 px-4 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start md:mb-6 mb-2 gap-4">
        <h2 className="md:text-5xl text-[2rem] font-semibold font-clash-display">
          Featured <span className="text-[#26A4FF]">jobs</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredJobs.map((job, index) => (
          <div
            key={index}
            className="p-6 border border-[#D6DDEB] "
          >
            <div className="flex justify-between items-start mb-6">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${job.logoBg} transition-transform group-hover:scale-110`}
              >
                {job.icon ? (
                  <Image
                    src={job.icon}
                    alt={job.company}
                    width={24}
                    height={24}
                    className="object-contain w-auto h-auto"
                  />
                ) : job.logoDot ? (
                  <div className={`w-6 h-6 rounded-full ${job.logoDot}`}></div>
                ) : (
                  <span
                    className={`font-black italic ${job.logoBg.includes("text") ? "" : "text-slate-900"}`}
                  >
                    {job.logoText}
                  </span>
                )}
              </div>
              <span className="border border-blue-600/20 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                {job.type}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-1 text-slate-900 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              {job.company} • {job.location}
            </p>
            <p className="text-sm text-slate-500 line-clamp-2 mb-6 leading-relaxed">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className={`${job.tagColors[tIndex]} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
