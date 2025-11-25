import ExtLink from './ExtLink';

interface Props {
  publication: any;
  index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
  return (
    <div className="w-full py-2">
      <p className="text-base text-gray-700 mb-1">
        <span className="font-bold mr-1">[{index + 1}]</span>
        {publication.author} <b><i>{publication.title}</i></b>
      </p>
      <p className="text-sm text-gray-500 mb-2">{publication.conference}</p>
      {publication.links && publication.links.length > 0 && (
        <div className="flex flex-wrap justify-start sm:justify-end gap-2 text-sm font-bold text-gray-500">
          {publication.links
            .filter((linkItem: any) => linkItem.url && linkItem.url.trim() !== "")
            .map((linkItem: any, idx: number) => (
              <ExtLink href={linkItem.url} key={idx}>
                [{linkItem.name}]
              </ExtLink>
            ))}
        </div>
      )}
    </div>
  );
};

export default PublicationItem;

