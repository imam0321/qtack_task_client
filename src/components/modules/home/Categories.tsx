import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Design", jobs: 235, icon: "/icons/pen.svg" },
  { name: "Sales", jobs: 756, icon: "/icons/network.svg" },
  { name: "Marketing", jobs: 140, icon: "/icons/mic.svg", active: true },
  { name: "Finance", jobs: 325, icon: "/icons/camera.svg" },
  { name: "Technology", jobs: 436, icon: "/icons/pc.svg" },
  { name: "Engineering", jobs: 542, icon: "/icons/code.svg" },
  { name: "Business", jobs: 211, icon: "/icons/bage.svg" },
  { name: "Human Resource", jobs: 346, icon: "/icons/users.svg" },
];

export default function Categories() {
  return (
    <section className="lg:px-31 px-4 pb-10 pt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between md:items-end items-start md:mb-6 mb-2 gap-4">
        <h2 className="md:text-5xl text-[2rem] font-semibold font-clash-display">
          Explore by <span className="text-[#26A4FF]">category</span>
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

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`md:p-8 p-4 border ${cat.active
              ? "bg-[#4640DE] text-white border-[#4640DE]"
              : "bg-white text-[#25324B] border-[#D6DDEB]"
              }`}
          >
            {/* Mobile: flex row (icon + text + arrow), Desktop: flex-col */}
            <div className="flex justify-between items-center sm:flex-col sm:items-start gap-4">
              {/* Logo */}
              <div className="w-10 h-10 shrink-0">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={40}
                  height={40}
                  className={`${cat.active ? "invert brightness-0" : ""} w-full h-full`}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h3 className="md:text-2xl text-[20px] font-semibold font-clash-display">
                  {cat.name}
                </h3>
                <p
                  className={`${cat.active ? "text-white" : "text-[#7C8493]"} md:text-lg text-base mt-1 flex md:justify-between items-center gap-2`}
                >
                  {cat.jobs} jobs available
                  <svg
                    className={`w-4 h-4 md:flex hidden  ${cat.active ? "text-white" : "text-[#7C8493]"}`}
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
                </p>
              </div>
              <svg
                className={`w-4 h-4 sm:hidden shrink-0 ${cat.active ? "text-white" : "text-[#7C8493]"}`}
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
            </div>
          </div>
        ))}
      </div>

      {/* Mobile-only Link */}
      <div className="sm:hidden mt-6">
        <Link
          href="#"
          className="text-[#4640DE] font-semibold flex justify-start items-center"
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
    </section>
  );
}
