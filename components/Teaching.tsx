import data from "./data/teaching.json";

const Teaching = (): JSX.Element | null => {
  if (!data || data.length === 0) return null;

  return (
    <section className="grid" id="teaching">
      <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:h-auto"
          >
            <div className="w-full bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-lg">
                  {item.role} — {item.university}
                </p>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <ul className="list-disc list-inside ml-4 space-y-1 text-justify">
                {item.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;
