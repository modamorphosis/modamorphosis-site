"use client";

import { useEffect, useRef, useState } from "react";
import ThreeDLogo from "./components/3d-logo";
import MouseFollower from "./components/mouse-follower";
import ScrollIndicator from "./components/scroll-indicator";
import NavMenu from "./nav-menu";
import HomeSection from "./components/home-section";
import AboutSection from "./components/about-section";
import IndexSection from "./components/index-section";
import JamieBio from "./components/jaimie-bio";
import BrookeBio from "./components/brooke-bio";
import VideoSplash from "./components/video-splash";
import Footer from "./components/footer";

export default function Home() {
  // srolls nav until fixed in body
  const [isFixed, setIsFixed] = useState(false);
  const handleFixedNav = () => {
    const bodySection = document.getElementById("bodySection");
    if (bodySection) {
      const stickyStart = bodySection.offsetTop;
      setIsFixed(window.scrollY >= stickyStart);
    }
  };

  // scroll to bodySection on first click
  const handleLandingClick = (event: MouseEvent) => {
    const bodySection = document.getElementById("bodySection");
    const landingSection = document.getElementById("landingSection");
    // Check if the click occurred within the target section
    if (landingSection && landingSection.contains(event.target as Node)) {
      console.log("clicked within target section");
      window.scrollTo({
        top: bodySection?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // event listeners
  useEffect(() => {
    window.addEventListener("click", handleLandingClick);
    window.addEventListener("scroll", handleFixedNav);
    return () => {
      window.removeEventListener("scroll", handleFixedNav);
      window.removeEventListener("click", handleLandingClick);
    };
  }, []);

  const horizontalWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.pageYOffset;
      const horizontalWrapper = horizontalWrapperRef.current;

      if (!horizontalWrapper) return;

      // Reset classes
      horizontalWrapper.classList.remove("pre-sticky", "sticky", "post-sticky");

      const offsetTop = horizontalWrapper.offsetTop;
      const offsetHeight = horizontalWrapper.offsetHeight;
      const windowHeight = window.innerHeight;

      if (windowScroll >= offsetTop + offsetHeight - windowHeight) {
        horizontalWrapper.classList.add("post-sticky");
        console.log("after");
      } else if (windowScroll >= offsetTop) {
        horizontalWrapper.classList.add("sticky");
        const start = windowScroll - offsetTop;
        const end = offsetTop + offsetHeight - windowHeight;
        const pct = (start / end) * 100;
        const innerElement =
          horizontalWrapper.querySelector<HTMLElement>(".inner");
        if (innerElement) {
          innerElement.style.transform = `translateX(-${pct}%)`;
        }
      } else {
        horizontalWrapper.classList.add("pre-sticky");
        const defaultInnerElement =
          horizontalWrapper.querySelector<HTMLElement>(".inner");
        if (defaultInnerElement) {
          defaultInnerElement.style.transform = "translateX(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="landingSection" className="h-screen relative overflow-hidden">
        <VideoSplash />
      </div>

      <div id="bodySection" className="relative">
        <NavMenu isFixed={isFixed} />

        <div
          id="home"
          className="w-full md:h-screen pt-[16vh] md:pt-6 md:pl-[16vw] p-6"
        >
          <HomeSection />
        </div>
      </div>

      <div id="about">
        <div className="block md:hidden w-full pt-[3rem] p-6">
          <AboutSection />
        </div>
        <div
          id="horizontal-wrapper"
          ref={horizontalWrapperRef}
          className="hidden md:block"
        >
          <div className="inner h-screen md:pl-[16vw]">
            <AboutSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

{
  /* <div
          id="index"
          className="w-full h-screen pt-[16vh] md:pt-6 md:pl-[16vw] p-6 snap-start overflow-x-scroll"
        >
          <IndexSection />
        </div> */
}
