import Link from "next/link";
import FeaturedJobCard from "./FeaturedJobCard";

export interface IJob {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
  icon?: string;
}

const featuredJobs: IJob[] = [
  { title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", type: "Full Time", description: "Revolut is looking for Email Marketing to help team ma ...", tags: ["Marketing", "Design"] },
  { title: "Brand Designer", company: "Dropbox", location: "San Francisco, US", type: "Full Time", icon: "/icons/vodafone.svg", description: "Dropbox is looking for Brand Designer to help the team t ...", tags: ["Design", "Business"] },
  { title: "Email Marketing", company: "Pitch", location: "Berlin, Germany", type: "Full Time", description: "Pitch is looking for Customer Manager to join marketing t ...", tags: ["Marketing"] },
  { title: "Visual Designer", company: "Blinkist", location: "Granada, Spain", type: "Full Time", description: "Blinkist is looking for Visual Designer to help team desi ...", tags: ["Design"] },
  { title: "Product Designer", company: "ClassPass", location: "Manchester, UK", type: "Full Time", description: "ClassPass is looking for Product Designer to help us ...", tags: ["Marketing", "Design"] },
  { title: "Lead Designer", company: "Canva", location: "Ontario, Canada", type: "Full Time", description: "Canva is looking for Lead Engineer to help develop n ...", tags: ["Design", "Business"] },
  { title: "Brand Strategist", company: "GoDaddy", location: "Marseille, France", type: "Full Time", description: "GoDaddy is looking for Brand Strategist to join the team ...", tags: ["Marketing"] },
  { title: "Data Analyst", company: "Twitter", location: "San Diego, US", type: "Full Time", icon: "/icons/Twitter.svg", description: "Twitter is looking for Data Analyst to help team desi ...", tags: ["Technology"] },
];

export default function FeaturedJobs() {
  return (
    <section className="px-4 py-6 lg:px-31">
      <div className="mb-2 flex flex-col justify-between md:items-end items-start gap-4 sm:flex-row md:mb-4">
        <h2 className="text-[2rem] font-semibold font-clash-display md:text-5xl">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h2>

        <Link href="#" className="hidden items-center font-semibold text-[#4640DE] md:flex">
          Show all jobs
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </Link>
      </div>

      {/* Mobile: Swipe */}
      <div className="sm:hidden -mx-4 overflow-x-auto px-4 pb-4">
        <div className="flex w-max gap-2 snap-x snap-mandatory">
          {featuredJobs.map((job, i) => (
            <FeaturedJobCard key={i} job={job} className="w-[75vw] snap-start" />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
        {featuredJobs.map((job, i) => (
          <FeaturedJobCard key={i} job={job} />
        ))}
      </div>

      {/* Mobile Link */}
      <div className="mt-1 sm:hidden">
        <Link href="#" className="flex items-center font-semibold text-[#4640DE]">
          Show all jobs
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </Link>
      </div>
    </section>
  );
}