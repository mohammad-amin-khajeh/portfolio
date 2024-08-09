import { ChevronRight } from "lucide-react";

const ProjectCard = ({
  name,
  description,
  url,
  imgUrl,
  isFirstItem,
}: {
  name: string;
  description: string;
  url: string;
  imgUrl: string;
  isFirstItem: boolean;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className={`flex group hover:bg-tokyonight-light-black/30 group/item my-2 gap-4 py-2 ${!isFirstItem && "border-t "}`}
  >
    <img src={imgUrl} alt={name} className="rounded-xl mx-2 size-36" />
    <div className="flex flex-grow flex-col">
      <p className="font-semibold group-hover:text-tokyonight-dark-cyan/70 text-xl md:text-2xl group-hover:item/:hover:text-red-600 text-tokyonight-light-cyan">
        {name}
      </p>
      <p className="text-tokyonight-light-white font-medium">{description}</p>
    </div>
    <div>
      <ChevronRight className="text-tokyonight-light-purple" />
    </div>
  </a>
);

export default ProjectCard;
