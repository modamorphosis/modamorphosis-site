"use client";

import { useEffect, useState } from "react";
import ThreeDLogo from "./components/3d-logo";
import MouseFollower from "./components/mouse-follower";
import ScrollIndicator from "./components/scroll-indicator";
import NavMenu from "./nav-menu";
import { H1Main, H1Secondary, Subheading } from "./components/typography";
import HomeSection from "./components/home-section";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const bodySection = document.getElementById("bodySection");
    if (bodySection) {
      const stickyStart = bodySection.offsetTop;
      setIsFixed(window.scrollY >= stickyStart);
    }
  };

  // scroll to bodySection on first click
  const handleFirstClick = () => {
    const bodySection = document.getElementById("bodySection");
    console.log("clicked");
    window.scrollTo({
      top: bodySection?.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("click", handleFirstClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <div className="bg-off-black overflow-x-hidden">
      {/* Landing */}
      <div className="flex flex-col justify-center items-center h-screen">
        <ThreeDLogo />
        <ScrollIndicator />
        <MouseFollower />
      </div>
      {/* body */}
      <div id="bodySection" className="relative w-screen">
        <NavMenu isFixed={isFixed} />
        {/* home */}
        <div
          id="home"
          className="w-auto h-screen pt-[16vh] md:pt-6 md:ml-[16vw] p-6"
        >
          <HomeSection />
        </div>
        {/* about */}
        <div
          id="about"
          className="w-auto h-screen pt-[16vh] md:pt-6 md:ml-[16vw] p-6"
        >
          about
        </div>
        {/* index */}
        <div
          id="index"
          className="w-auto h-screen pt-[16vh] md:pt-6 md:ml-[16vw] p-6"
        >
          Index
        </div>
      </div>
    </div>
  );
}
