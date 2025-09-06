import Video from "./video";

export default function HomeHeroText() {
  return (
    <div className="font-[lausanne-300] pt-5 text-center">
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[8vw]">L'étincelle</div>
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[8vw]">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9vw] flex items-center justify-center uppercase leading-[8vw]">la créativité</div>
    </div>
  );
}
