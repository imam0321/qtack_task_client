import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 font-clash-display tracking-tight">
            Discover <br className="hidden lg:block" /> more than <br className="hidden lg:block" />
            <span className="text-blue-600 relative inline-block">
              5000+ Jobs
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2.00035 9.00005C55.0004 2.50005 131.001 -1.49995 198.001 9.00005" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Great platform for the job seeker that is searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2.5 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row items-center max-w-2xl mx-auto lg:mx-0 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
            <div className="w-full md:flex-1 flex items-center px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-slate-100 group">
              <svg className="w-5 h-5 text-slate-400 mr-3 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <input className="border-none focus:ring-0 w-full text-base text-slate-900 placeholder:text-slate-400 bg-transparent outline-none" placeholder="Job title or keyword" type="text" />
            </div>

            <div className="w-full md:flex-1 flex items-center px-4 py-3 md:py-2 group">
              <svg className="w-5 h-5 text-slate-400 mr-3 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <select className="border-none focus:ring-0 w-full text-base text-slate-900 bg-transparent outline-none cursor-pointer appearance-none">
                <option value="Florence, Italy">Florence, Italy</option>
                <option value="Remote">Remote</option>
                <option value="New York, USA">New York, USA</option>
                <option value="London, UK">London, UK</option>
              </select>
              <svg className="w-4 h-4 text-slate-400 ml-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-500/20 whitespace-nowrap mt-2 md:mt-0">
              Search my job
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500 font-medium">
            <span className="text-slate-400">Popular: </span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">UI Designer</span>,
            <span className="cursor-pointer hover:text-blue-600 transition-colors ml-1">UX Researcher</span>,
            <span className="cursor-pointer hover:text-blue-600 transition-colors ml-1">Android</span>,
            <span className="cursor-pointer hover:text-blue-600 transition-colors ml-1">Admin</span>
          </p>
        </div>

        <div className="lg:w-1/2 mt-20 lg:mt-0 relative flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[440px] aspect-[4/5]">
            <Image
              src="/images/hero-image.jpg"
              alt="Professional Woman smiling"
              fill
              className="rounded-3xl shadow-2xl object-cover z-20 relative"
              priority
            />

            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full z-10 animate-pulse-slow"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border-[6px] border-dashed border-blue-100 rounded-full z-10 animate-spin-slow"></div>

            <div className="absolute top-12 -left-12 bg-white p-4 rounded-xl shadow-xl z-30 flex items-center space-x-3 animate-float border border-slate-50">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Job Offer</p>
                <p className="text-xs text-slate-500">Accepted</p>
              </div>
            </div>

            <div className="absolute bottom-20 -right-8 bg-white p-4 rounded-xl shadow-xl z-30 flex items-center space-x-3 animate-float-delayed border border-slate-50">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">10k+ Roles</p>
                <p className="text-xs text-slate-500">Available now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
