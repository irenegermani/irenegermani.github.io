import ExtLink from './ExtLink';

interface Props {
  publication: any;
  index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
  return (
    <div className="mt-4 mb-6">
      <p className="text-base text-gray-700 mb-1">
        <span className="font-bold mr-1">[{index + 1}]</span>
        {publication.author} <b><i>{publication.title}</i></b>
      </p>
      <p className="text-sm text-gray-500 mb-1">{publication.conference}</p>
      {publication.links && publication.links.length > 0 && (
        <p className="text-gray-500 flex justify-end text-sm font-bold flex-wrap gap-2">
          {publication.links
            .filter((linkItem: any) => linkItem.url && linkItem.url.trim() !== "")
            .map((linkItem: any, idx: number) => (
              <ExtLink href={linkItem.url} key={idx}>
                [{linkItem.name}]
              </ExtLink>
            ))}
        </p>
      )}
    </div>
  );
};

export default PublicationItem;

