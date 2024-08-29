import React from "react";
import { BodyText, Title } from "./typography";

export default function BrookeBio() {
  return (
    <div>
      <Title>Brooke Smith</Title>
      <br></br>
      <BodyText>
        MODAMORPHOSIS - Co-Founder, Chief Creative Officer <br></br>
        FASHION&apos;S ALCHEMISTS - Lead Curator
      </BodyText>
      <br></br>
      <BodyText className="leading-[110%]">
        “As a sci-fi enthusiast, I think fashion has exciting unrealised
        potential for experimentation & playfulness. Innovative technologies and
        materials will soon start making our wildest wearable imaginations
        reality - extending our capabilities, allowing for unbounded creative
        representation, and strengthening how we interface with the natural
        world. I&apos;m excited to work with the coolest global designers to
        realise these futures for fashion”
      </BodyText>
      <br></br>
      <BodyText className="leading-[110%]">
        Brooke Smith is an American creative technologist, curator and creative
        producer. Her work centres on critically investigating emerging
        technologies as disruptors and accelerators of social and cultural
        norms, design, and lived experiences. She attended Parsons School of
        Design where she studied Design and Technology - merging computer
        programming, robotics, fashion, digital fabrication, mixed reality and
        generative art. She has worked on creative teams for prestigious
        cultural institutions - such as the Smithsonian for their 175th
        anniversary exhibition The FUTURES, SXSW Immersive Film Festival and The
        Milken Institute. She works to showcase and deliver future-forward
        technologies, artworks and designs to large, diverse audiences within
        museums, events and public spaces. Brooke is driven to explore and shape
        positive futures for fashion by working with global emerging designers,
        researchers, & artists to consider how fashion, one of our most
        communal, globally shared forms of expression, can better the lives of
        the humans and more-than-human organisms on this planet.
      </BodyText>
    </div>
  );
}
