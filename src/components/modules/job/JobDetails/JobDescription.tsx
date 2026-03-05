interface Props {
  description?: string;
}

export default function JobDescription({ description }: Props) {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-clash-display mb-2 text-2xl font-bold text-[#25324B]">
          Job Description
        </h2>
        <div className="prose prose-slate max-w-none text-base leading-relaxed text-[#515B6F] md:text-lg">
          {description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: description.replace(/\n/g, "<br/>"),
              }}
            />
          ) : (
            <p>No description available for this position.</p>
          )}
        </div>
      </section>
    </div>
  );
}
