import { AtSign, GitCompare, Linkedin, Send, Youtube } from "lucide-react";

const Bio = () => (
  <>
    <section className="section">
      <img
        src="src/assets/memoji.png"
        alt="memoji"
        className="bg-violet-200 size-32 rounded-full"
      />
      <h1 className="text-xl font-semibold md:text-2xl mt-3">
        Mohammad amin Khajeh{" "}
      </h1>
      <div className="flex gap-6 mb-3 justify-center">
        <a
          href="https://www.linkedin.com/in/mohammadamin-khajeh-koolaki/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="cursor-pointer transition hover:scale-125 text-tokyonight-light-cyan hover:text-tokyonight-dark-cyan/50" />
        </a>
        <a
          href="https://github.com/mohammad-amin-khajeh"
          target="_blank"
          rel="noreferrer"
        >
          <GitCompare className="cursor-pointer transition hover:scale-125 text-tokyonight-light-red hover:text-tokyonight-dark-red/50" />
        </a>
        <a
          href="mailto:mmdamin_khajehkoolaki256@protonmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AtSign className="cursor-pointer transition hover:scale-125 text-tokyonight-light-purple hover:text-tokyonight-dark-purple/50" />
        </a>
        <a href="t.me/kvltvred" target="_blank" rel="noreferrer">
          <Send className="cursor-pointer transition hover:scale-125 text-tokyonight-light-yellow hover:text-tokyonight-dark-yellow/50" />
        </a>
        <a
          href="http://www.youtube.com/@MohammadaminKhajehkoolaki"
          target="_blank"
          rel="noreferrer"
        >
          <Youtube className="cursor-pointer transition hover:scale-125 text-tokyonight-light-red hover:text-tokyonight-dark-red/50" />
        </a>
      </div>
      <p className="text-tokyonight-light-green font-semibold">
        Junior fullstack developer at your service.
      </p>
    </section>
  </>
);

export default Bio;
