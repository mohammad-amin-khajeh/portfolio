import { Cog } from "lucide-react";
import Tag from "../components/tag";

const skills = [
  "Git & github",
  "Gnu/linux",
  "HTML & CSS",
  "Node.js",
  "Python",
  "React.js",
  "Rust(beginner)",
  "SQL",
  "Typescript",
  "[neo]vim",
];

const Skills = () => (
  <section className="section mt-4 p-2 md:p-5">
    <h2>
      <div className="flex">
        Skills <Cog className="mt-1 md:mt-2 ml-1" />
      </div>
    </h2>
    <ul className="flex flex-wrap justify-center gap-3 leading-10">
      {skills.map((skill, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <li key={index}>
          <Tag name={skill} />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
