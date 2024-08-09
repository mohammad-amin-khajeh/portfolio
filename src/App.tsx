import Bio from "./sections/bio";
import Skills from "./sections/skills";
import Interests from "./sections/interests";
import Projects from "./sections/projects";
import { Info } from "lucide-react";

export default function App() {
  return (
    <div className="container-md mx-auto grid grid-cols-1 mt-8 md:grid-cols-3 gap-4 p-3 md:p-7">
      <div>
        <h1>
          <div className="flex justify-center">
            Info <Info className="mt-2 size-7 ml-2" />
          </div>
        </h1>
        <Bio />
        <Skills />
        <Interests />
      </div>
      <div className="md:col-span-2 mt-8 md:mt-0">
        <Projects />
      </div>
    </div>
  );
}
