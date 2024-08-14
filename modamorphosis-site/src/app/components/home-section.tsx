import React from "react";
import { BodyText, H1Main, H1Secondary, Subheading } from "./typography";

export default function HomeSection() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none flex justify-between h-fit">
        <div className="min-w-fit pr-6">
          <H1Main>Reshaping the</H1Main>
          <H1Secondary>future of fashion</H1Secondary>
        </div>
        <div className="hidden md:block">
          <Subheading>
            where innovative craft, revolutionary technologies, & the natural
            world exist symbiotically.
          </Subheading>
        </div>
      </div>
      <div className="flex-1 mt-[15vh] flex gap-6">
        <div className="w-[40%]">
          <img src="/img/logo_color3.png" className="h-full object-cover"></img>
        </div>
        <div className="w-[30%]">
          <img src="/img/logo_color3.png" className="h-full object-cover"></img>
        </div>
        <div className="w-[30%]">
          <div className="text-[0.75rem]/[100%] md:text-[1rem]/[100%] font-alliance uppercase text-off-white">
            Engaging the next generation of designers to reimagine exciting,
            experimental, & sustainable futures for fashion.<br></br>
            <br></br> Creating pioneering immersive experiences, exhibitions, &
            events through visionary artistic collaborations
          </div>

          <img
            src="/img/logo_color3.png"
            className="object-cover mt-[10vh]"
          ></img>
        </div>
      </div>
    </div>
  );
}
