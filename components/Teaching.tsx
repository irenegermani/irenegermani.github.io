import TeachingItem from "./TeachingItem";
import data from "./data/teaching.json";

const Teaching = (): JSX.Element => {
  return (
    <section className="w-full" id="teaching">
      <h2 className="text-xl font-bold mt-12 mb-4">
        Teaching
      </h2>
      <div className="flex flex-col gap-6">
        {data.map((course, index) => (
          <TeachingItem course={course} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Teaching;