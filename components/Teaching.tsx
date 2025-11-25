import data from "./data/teaching.json";

const Teaching = (): JSX.Element | null => {
  if (!data || data.length === 0) return null;

  return (
    <section className="grid" id="teaching">
      {/* Wrap heading and cards in the same max-width container as projects */}
      <div className="mx-auto lg:w-11/12">
        <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>

        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className="shadow-lg mb-8 w-full" // full width of container
            >
              <div className="w-full bg-gray-50 p-8 rounded-lg">
                {/* University and date at the top */}
                <div className="flex justify-between items-center mb-2 text-gray-500 text-sm">
                  <span>{item.university}</span>
                  <span>{item.date}</span>
                </div>

                {/* Job title / role */}
                <h2 className="text-gray-700 font-semibold text-lg">{item.role}</h2>

                {/* Courses below the job title */}
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-gray-700 text-sm text-justify">
                  {item.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
