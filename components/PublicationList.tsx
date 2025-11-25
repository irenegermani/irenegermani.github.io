import PublicationItem from './PublicationItem';
import data from './data/publications.json';

const PublicationList = (): JSX.Element => {
  return (
    <section className="w-full" id="publications">
      <h2 className="text-xl font-bold mt-12 mb-4">
        Research
      </h2>
      <div className="flex flex-col gap-4">
        {data.map((publication, index) => (
          <PublicationItem publication={publication} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PublicationList;
