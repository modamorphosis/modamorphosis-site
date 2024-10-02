import { cn } from "@/utils/cn";
import React from "react";
import MenuLogo from "./components/menu-logo";
import { Title } from "./components/typography";

type NavProps = {
  isFixed: boolean;
};

export default function NavMenu(props: NavProps) {
  const { isFixed = [] } = props;

  return (
    <div
      className={cn(
        " z-50 top-0 left-0 w-screen md:w-[20vw] h-[18vh] md:h-screen p-[1.5rem] bg-menu-gradient-mobile md:bg-menu-gradient flex flex-row md:flex-col",
        isFixed ? "fixed" : "absolute"
      )}
    >
      <div>
        <a href="#home">
          <MenuLogo />
        </a>
      </div>
      <div className="flex flex-row md:flex-col gap-4 md:gap-0 pl-6 md:pl-0 w-full justify-end">
        <Title className="uppercase md:pt-6 !leading-loose">
          <a href="#about">About</a>
        </Title>
        {/* <Title className="uppercase !leading-loose">
          <a href="#index">Index</a>
        </Title> */}
        <Title className="uppercase !leading-loose">
          <a href="mailto:info@modamorphosis.com">Contact</a>
        </Title>
      </div>
    </div>
  );
}
