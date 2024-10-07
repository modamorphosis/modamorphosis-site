import React, { useEffect, useRef, useState } from "react";
import { BodyText, H1Main, Title } from "./typography";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Person = {
  name: string;
  title1: string;
  title2: string;
  quote: string;
  bio: string;
  image: { asset: { url: string } };
};

export default function AboutSection() {
  const [aboutData, setAboutData] = useState<Person[]>([]);

  useEffect(() => {
    client
      .fetch(
        `
          *[_type == "aboutPage"] {
              person {
                name,
                title1,
                title2,
                quote,
                bio,
                image
              }
            }
          `
      )
      .then((data) => setAboutData(data.map((item: any) => item.person))) // Extracting person objects
      .catch((error) =>
        console.error("Error fetching about page data:", error)
      );
  }, []);

  return (
    <div className="flex flex-col justify-between h-full md:pt-6 md:pr-6 md:pb-12 w-fit relative">
      <div className="flex-none flex justify-between h-[5rem] overlow-y-hidden w-fit">
        <div className="min-w-fit pr-6">
          <H1Main>About</H1Main>
        </div>
      </div>
      <div className="md:h-fit flex flex-col md:flex-row md:gap-8 w-fit overflow-hidden md:max-h-[76vh]">
        {/* group pic */}
        <div className="md:w-[38%] md:min-w-[38rem] overflow-hidden">
          <img
            src="/img/about-img.png"
            className="w-full h-full object-cover object-center"
            alt="Group picture"
          />
        </div>
        {/* about text */}
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
        {aboutData.map((person: Person, index: number) => (
          <div key={index} className="flex flex-col md:flex-row md:gap-8">
            <div className="md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] overflow-hidden">
              <img
                src={urlFor(person.image).url()}
                alt={`${person.title1} portrait`}
                className="w-full h-auto max-h-full object-cover object-top"
              />
            </div>
            <div
              className={`md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] md:pb-0 pt-4 ${index === 0 ? `pb-[4.5rem]` : ``}`}
            >
              <Title className="text-[1rem] md:text-[1.5rem]">
                {person.name}
              </Title>
              <br></br>
              <BodyText>
                {person.title1}
                <br></br>
                {person.title2}
              </BodyText>
              <br></br>
              <BodyText className="leading-[110%]">{person.quote}</BodyText>
              <br></br>
              <BodyText className="leading-[110%]">{person.bio}</BodyText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <div className="md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] overflow-hidden">
{
  /* <img
src="/img/Jamie.jpeg"
alt="Jamie QQ Wu portrait"
className="w-full h-auto max-h-full object-cover object-top"
/>
</div>
<div className="md:w-[32%] md:min-w-[35rem] md:max-w-[36vw] pb-[4.5rem] md:pb-0 pt-4">
<JamieBio></JamieBio>
</div> */
}
