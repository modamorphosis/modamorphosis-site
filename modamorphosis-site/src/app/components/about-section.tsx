import React from "react";
import { BodyText, H1Main } from "./typography";
import JamieBio from "./jaimie-bio";
import BrookeBio from "./brooke-bio";
// md:h-[23vh]
export default function AboutSection() {
  return (
    <div className="flex flex-col justify-between h-full md:pt-6 md:pr-6 md:pb-6 w-fit">
      <div className="flex-none flex justify-between h-[5rem] overlow-y-hidden w-fit">
        <div className="min-w-fit pr-6">
          <H1Main>About</H1Main>
        </div>
      </div>
      <div className="md:h-fit flex flex-col md:flex-row md:gap-6 w-fit overflow-hidden">
        <div className="md:w-[38%] md:min-w-[38rem] overflow-hidden">
          <img src="/img/about-img.png" className="w-full object-cover"></img>
        </div>
        <div className="md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] pb-[4.5rem] md:pb-0 pt-4 md:pt-0">
          <BodyText>
            ModaMorphosis, brainchild of Jamie QQ Wu and Brooke Smith, is a
            creative company newly formed in Singapore dedicated to pushing the
            boundaries of fashion expression through visionary artistic
            collaborations and progressive creative experiences to usher forth a
            new era of high fashion.
          </BodyText>
          <br></br>
          <BodyText>
            Through awe-inspiring immersive exhibitions, experiences and events,
            ModaMorphosis supports and highlights the next generation of
            trailblazing fashion designers. Based in Singapore and New York,
            they engage global emerging fashion designers, artists, and creative
            technologists to collaboratively consider, design and develop
            speculative fashions and expressions of the future. Through their
            work, ModaMorphosis explores the question: if your clothing could
            look, behave, or be made of anything, how would you adorn, equip, or
            transform your body? Visitors will be immersed in fashion&apos;s
            future while celebrating designers who are acting as alchemists to
            re-engineer the material possibilities of our garments. This
            interactive exhibition will feature emerging designers redefining
            the fibres, dynamic capabilities, craft, platforms and role of
            “designer” within fashion.
          </BodyText>
          <br></br>
          <BodyText className="uppercase underline hover:no-underline">
            <a
              target="_blank"
              href="https://grazia.sg/fashion/inside-the-modamorphosis-launch/"
            >
              Read More
            </a>
          </BodyText>
        </div>
        <div className="md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] pb-[4.5rem] md:pb-0 ">
          <JamieBio></JamieBio>
        </div>
        <div className="md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] md:pb-0">
          <BrookeBio></BrookeBio>
        </div>
      </div>
    </div>
  );
}
