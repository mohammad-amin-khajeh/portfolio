import { Sticker } from "lucide-react";
import InterestList from "../components/interestList";

const interests = [
  "Using and building light FOSS",
  "Creating content about developer productivity",
  "Using neovim for all my text editing",
  "Working on my own developer productivity",
  "Suckless software",
];

const Interests = () => (
  <section className="section mt-4 p-2 md:p-5">
    <h2>
      <div className="flex">
        Interests <Sticker className="mt-1 md:mt-2 ml-1" />
      </div>
    </h2>
    <ul className="gap-3 flex flex-col">
      {interests.map((interest, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <InterestList key={index} name={interest} index={index} />
      ))}
    </ul>
  </section>
);

export default Interests;
