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
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);
  const [isFixedFooter, setIsFixedFooter] = useState(false);

  const handleFixedNav = () => {
    const bodySection = document.getElementById("bodySection");
    if (bodySection) {
      const stickyStart = bodySection.offsetTop;
      setIsFixed(window.scrollY >= stickyStart);
      setIsFixedFooter(window.scrollY >= stickyStart);
    }
  };

  const { ref: aboutRef, inView: mainInView } = useInView({
    threshold: 0.2,
  });

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
      const innerElement =
        horizontalWrapper.querySelector<HTMLElement>(".inner");
      if (!innerElement) return;

      const contentWidth = innerElement.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = contentWidth - viewportWidth;

      // Update the wrapper height dynamically
      horizontalWrapper.style.height = `${
        scrollDistance + window.innerHeight
      }px`;

      if (windowScroll >= offsetTop + scrollDistance) {
        horizontalWrapper.classList.add("post-sticky");
        innerElement.style.transform = `translateX(-${scrollDistance}px)`;
      } else if (windowScroll >= offsetTop) {
        horizontalWrapper.classList.add("sticky");
        const scrollPercentage = (windowScroll - offsetTop) / scrollDistance;
        const translateX = scrollPercentage * scrollDistance;
        innerElement.style.transform = `translateX(-${translateX}px)`;
      } else {
        horizontalWrapper.classList.add("pre-sticky");
        innerElement.style.transform = "translateX(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial call to set correct height
    handleScroll();

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="landingSection" className="h-screen relative overflow-hidden">
        <VideoSplash />
      </div>

      <div id="bodySection" className="relative">
        <div className="hidden md:block">
          <Footer isFixed={isFixedFooter} hidden={mainInView} />
        </div>
        <NavMenu isFixed={isFixed} />
        <div
          id="home"
          className="w-full md:h-screen pt-[16vh] md:py-6 md:pl-[16vw] p-6"
        >
          <HomeSection />
        </div>
      </div>

      <div id="about" ref={aboutRef}>
        {/* mobile */}
        <div className="block md:hidden w-full pt-[16vh] p-6">
          <AboutSection />
        </div>
        {/* mobile footer */}
        <div className="block md:hidden">
          <Footer isFixed={isFixedFooter} />
        </div>
        <div
          id="horizontal-wrapper"
          ref={horizontalWrapperRef}
          className="hidden md:block"
        >
          <div className="inner h-screen md:pl-[16vw]">
            {/* desktop */}
            <AboutSection />
          </div>
        </div>
      </div>
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
