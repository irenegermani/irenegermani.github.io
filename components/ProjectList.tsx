import ProjectItem from './ProjectItem';
import data from './data/projects.json';

const ProjectList = (): JSX.Element => {
  return (
    <section className="grid gap-6" id="projects">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mt-12 mb-4 text-center md:text-left">
          Data
        </h2>

        <div className="flex flex-col gap-6">
          {data.map((project, index) => (
            <ProjectItem project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;