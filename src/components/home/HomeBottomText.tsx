import { Link } from "react-router-dom";

export default function HomeBottomText() {
  return (
    <div className="font-[lausanne-500] flex items-center justify-center gap-2">
      <div className="border-2 h-32 flex items-center px-14 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-6" to="/projects">
          Projects
        </Link>
      </div>
      <div className="border-2 h-32 flex items-center px-14 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-6" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
}
