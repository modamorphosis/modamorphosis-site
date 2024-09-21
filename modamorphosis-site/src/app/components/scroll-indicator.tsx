import React from "react";
import { Title } from "./typography";
import { ChevronDown } from "./chevron-down";

export default function ScrollIndicator() {
  return (
    <div className="md:hidden absolute bottom-0 w-full flex flex-col items-center justify-center p-12">
      <Title className=" uppercase pb-2">&#91;Scroll down&#93;</Title>
      <div className="z-50 flex justify-center m-auto relative animate-bounce">
        <ChevronDown color="f4f4f4" />
      </div>
    </div>
  );
}
