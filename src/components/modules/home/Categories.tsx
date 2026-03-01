import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Design", jobs: 235, icon: "/icons/code.svg" },
  { name: "Sales", jobs: 756, icon: "/icons/network.svg" },
  { name: "Marketing", jobs: 140, icon: "/icons/mic.svg", active: true },
  { name: "Finance", jobs: 325, icon: "/icons/pc.svg" },
  { name: "Technology", jobs: 436, icon: "/icons/code.svg" },
  { name: "Engineering", jobs: 542, icon: "/icons/pc.svg" },
  { name: "Business", jobs: 211, icon: "/icons/network.svg" },
  { name: "Human Resource", jobs: 346, icon: "/icons/mic.svg" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold font-[family-name:var(--font-clash-display)] text-slate-900">
          Explore by <span className="text-blue-600">category</span>
        </h2>
        <Link href="#" className="text-blue-600 font-bold flex items-center hover:underline group transition-all">
          Show all jobs
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`p-8 border transition-all duration-300 group cursor-pointer ${cat.active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 -translate-y-1 border-blue-600"
                : "bg-white border-slate-100 hover:border-blue-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 text-slate-900"
              }`}
          >
            <div className={`w-12 h-12 mb-6 transition-transform group-hover:scale-110 duration-300 ${cat.active ? "text-white" : "text-blue-600"}`}>
              <Image
                src={cat.icon}
                alt={cat.name}
                width={48}
                height={48}
                className={`w-full h-full ${cat.active ? "brightness-0 invert" : ""}`}
              />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${!cat.active && "group-hover:text-blue-600"}`}>{cat.name}</h3>
            <p className={`flex items-center text-sm ${cat.active ? "text-white/80" : "text-slate-500"}`}>
              {cat.jobs} jobs available
              <svg className={`w-4 h-4 ml-2 transition-all duration-300 ${cat.active ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
