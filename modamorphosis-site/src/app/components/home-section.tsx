import React from "react";
import { BodyText, H1Main, H1Secondary, Subheading } from "./typography";

export default function HomeSection() {
  return (
    <div className="flex flex-col h-full md:overflow-hidden ">
      <div className="flex-none flex md:justify-between md:h-[28vh]">
        <div className="min-w-fit md:pr-6">
          <H1Main>Reshaping the</H1Main>
          <H1Secondary className="-mt-2 md:mt-0">future of fashion</H1Secondary>
        </div>
        <div className="hidden md:block">
          <Subheading>
            where innovative craft, revolutionary technologies, & the natural
            world exist symbiotically.
          </Subheading>
        </div>
      </div>
      <div className="flex-1 flex gap-6 pt-[3.5rem] max-h-[18rem] md:max-h-none overflow-hidden">
        <div className="w-1/2 md:w-[40%]">
          <img
            src="/img/mdmphss-1.png"
            className="lg:h-full md:w-full object-cover h-full"
          ></img>
        </div>
        <div className="w-1/2 md:w-[30%] h-full">
          <img
            src="/img/mdmphss-2.png"
            className="lg:h-full w-full object-cover md:h-auto"
          ></img>
        </div>
        <div className="w-[30%] hidden md:flex flex-col justify-between">
          <div className="text-[0.75rem]/[100%] md:text-[1rem]/[100%] font-alliance uppercase text-off-white">
            Engaging the next generation of designers to reimagine exciting,
            experimental, & sustainable futures for fashion.<br></br>
            <br></br> Creating pioneering immersive experiences, exhibitions, &
            events through visionary artistic collaborations
          </div>

          <img
            src="/img/mdmphss-3.png"
            className="w-full object-cover mt-[10vh]"
          ></img>
        </div>
      </div>
      <div className="md:hidden flex gap-6 pt-6">
        <div className="w-1/2 text-[0.75rem]/[100%] md:text-[1rem]/[100%] font-alliance uppercase text-off-white relative">
          <div className="pb-[2rem]">
            <Subheading>
              where innovative craft, revolutionary technologies, & the natural
              world exist symbiotically.
            </Subheading>
          </div>
          Engaging the next generation of designers to reimagine exciting,
          experimental, & sustainable futures for fashion.<br></br>
          <br></br> Creating pioneering immersive experiences, exhibitions, &
          events through visionary artistic collaborations
        </div>
        <div className="w-1/2">
          <img src="/img/mdmphss-4.png" className="w-full object-cover "></img>
        </div>
      </div>
    </div>
  );
}
