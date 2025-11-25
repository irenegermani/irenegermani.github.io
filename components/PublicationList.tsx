import PublicationItem from './PublicationItem';
import data from './data/publications.json';

const PublicationList = (): JSX.Element => {
  return (
    <section className="grid gap-6" id="publications">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mt-12 mb-4 text-center md:text-left">
          Research
        </h2>

        <div className="flex flex-col gap-4">
          {data.map((publication, index) => (
            <PublicationItem publication={publication} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationList;
