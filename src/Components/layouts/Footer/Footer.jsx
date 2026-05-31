import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = ({ ownerName, social }) => {
  return (
    <footer className="relative bg-neutral-950 w-full py-12 flex flex-col items-center gap-6 border-t border-neutral-800/50">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="text-neutral-500 text-sm tracking-widest uppercase">
          {ownerName}
        </p>
        <div className="w-8 h-px bg-gradient-to-r from-blue-600 to-violet-600" />
        <div className="flex flex-row text-xl gap-8">
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-violet-400 transition-all duration-300 hover:-translate-y-0.5">
            <FaGithub />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
