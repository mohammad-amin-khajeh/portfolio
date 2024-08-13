import { ScrollText } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

type project = {
  name: string;
  description: string;
  url: string;
  imgUrl: string;
};

const projects: project[] = [
  {
    name: "Event launcher",
    description: "Pretty event launcher made with nextjs, tailwind and react.",
    url: "https://github.com/mohammad-amin-khajeh/nextjs-event-launcher",
    imgUrl: "assets/event launcher.png",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Simple Tic-Tac-Toe game built in react that doesn't sacrifice on its looks.",
    url: "https://github.com/mohammad-amin-khajeh/tic-tac-toe",
    imgUrl: "assets/tic_tac_toe.png",
  },
  {
    name: "Dwm build",
    description:
      "Fast and aesthetic dwm build I've been working on for a year that has all the goodies for going blazingly fast.",
    url: "https://github.com/mohammad-amin-khajeh/dwm",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F992%2F513%2F317%2Fmonochrome-linux-minimalism-dwm-suckless-hd-wallpaper-preview.jpg&f=1&nofb=1&ipt=a22e8fb2108c2e7ecfd3078c1559b85bf0b67ae7624420fa8fde440cd833432b&ipo=images",
  },
  {
    name: "cdsplit.py",
    description:
      "Simple python script to automatically split and compress raw albums into individual files.",
    url: "https://github.com/mohammad-amin-khajeh/cdsplit.py",
    imgUrl:
      "https://files.realpython.com/media/Playing-and-Recording-Sound-in-Python_Watermarked.e9aac7628df3.jpg",
  },
];

const Projects = () => (
  <>
    <h1>
      <div className="flex justify-center">
        Recent projects <ScrollText className="mt-1 ml-2 size-8" />
      </div>
    </h1>
    <ul className="rounded-xl bg-tokyonight-dark-black shadow-lg shadow-black/60 p-2 md:px-4">
      {projects.map((project, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <li key={index}>
          <ProjectCard
            name={project.name}
            description={project.description}
            url={project.url}
            imgUrl={project.imgUrl}
            isFirstItem={index === 0}
          />
        </li>
      ))}
    </ul>
  </>
);

export default Projects;
