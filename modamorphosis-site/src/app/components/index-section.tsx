import React from "react";
import { Detail, H1Main } from "./typography";

export default function IndexSection() {
  return (
    <div className="flex flex-col justify-between h-full">
      <H1Main>Index</H1Main>
      <div className="flex justify-between">
        <Detail>©2024 MODAMORPHOSIS</Detail>
        <div className="flex gap-4">
          <Detail className="uppercase underline hover:no-underline">
            <a href="mailto:info@modamorphosis.com">Contact</a>
          </Detail>
          <Detail className="uppercase underline hover:no-underline">
            <a href="https://www.instagram.com/moda_morphosis/" target="_blank">
              Instagram
            </a>
          </Detail>
        </div>
      </div>
    </div>
  );
}
