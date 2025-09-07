import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function Agence() {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 20%",
        end: "top -180%",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * imageArray.length);

          if (imageRef.current) {
            imageRef.current.src = imageArray[index];
          }
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] rounded-3xl absolute top-[10vw] left-[30vw] overflow-hidden"
        >
          <img
            ref={imageRef}
            // src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="Agence"
            className="w-full h-full"
          />
        </div>
        <div className="relative font-[lausanne-500]">
          <div className="mt-[50vh]">
            <h1 className="text-[18vw] uppercase leading-[18vw] text-center">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C&apos;est pour ça qu&apos;on s&apos;engage à donner de la
              perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        <div></div>
      </div>
    </div>
  );
}
