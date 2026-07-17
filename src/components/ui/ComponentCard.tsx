type Requirement = {
  id: string;
  title: string;
};

interface CardProps {
  description?: string;
  requirements?: Requirement[];
  src?: string;
  title: string;
}

const ComponentCard = ({
  description,
  requirements,
  src,
  title,
}: CardProps) => {
  return (
    <a
      href={src}
      className="decoration-0 max-w-md cursor-pointer border border-background-50 rounded-md hover:bg-background-100 bg-background-50 p-4 duration-500 flex flex-col gap-4"
    >
      <span className="text-h5 " role="heading">
        {title}
      </span>

      {description && (
        <p className="text-body-sm min-h-10 line-clamp-3">{description}</p>
      )}

      {requirements && requirements.length > 0 && (
        <div className="mt-auto flex flex-row gap-2 cursor-auto">
          {requirements.map((req) => (
            <span className=" rounded-md py-2 px-4 bg-gray-1" key={req.id}>
              {req.title}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};

export default ComponentCard;
