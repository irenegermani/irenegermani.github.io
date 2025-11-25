import ProjectItem from './ProjectItem';
import data from './data/projects.json';

const ProjectList = (): JSX.Element => {
  return (
    <section className="w-full" id="projects">
      <h2 className="text-xl font-bold mt-12 mb-4">
        Data
      </h2>
      <div className="flex flex-col gap-6">
        {data.map((project, index) => (
          <ProjectItem project={project} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;