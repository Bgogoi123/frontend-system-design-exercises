type Requirement = {
  id: string;
  title: string;
};

interface CardProps {
  title: string;
  description?: string;
  onClick?: () => void;
  requirements?: Requirement[];
}

const Card = ({ title, description, requirements }: CardProps) => {
  return (
    <div className="cursor-pointer border border-textcolor-disabled rounded-md hover:bg-textcolor-disabled p-4 max-w-xl duration-500 flex flex-col gap-4">
      <span className="text-h5" role="heading">
        {title}
      </span>

      {description && <p className="text-body-sm">{description}</p>}

      {requirements && requirements.length > 0 && (
        <div className="flex flex-row gap-2">
          {requirements.map((req) => (
            <span className=" rounded-md py-2 px-4 bg-gray-100" key={req.id}>
              {req.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
