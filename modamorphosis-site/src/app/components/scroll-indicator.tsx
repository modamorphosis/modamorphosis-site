import React from "react";
import { Title } from "./typography";

export default function ScrollIndicator() {
  return (
    <div className="md:hidden absolute bottom-0 w-full flex flex-col items-center justify-center p-12">
      <Title className=" uppercase pb-2">&#91;Scroll down&#93;</Title>
      <div className="text-[0.5rem]">jumping arrow</div>
    </div>
  );
}
