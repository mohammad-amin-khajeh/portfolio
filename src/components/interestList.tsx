const InterestList = ({ name, index }: { name: string; index: number }) => (
  <span
    key={index}
    className="even:bg-tokyonight-dark-blue rounded-xl font-semibold odd:bg-tokyonight-dark-green text-tokyonight-dark-black text-center md:text-left p-2"
  >
    {name}
  </span>
);

export default InterestList;
