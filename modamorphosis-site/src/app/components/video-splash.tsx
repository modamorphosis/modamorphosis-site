import Script from "next/script";
import React from "react";
import ThreeDLogo from "./3d-logo";
import ScrollIndicator from "./scroll-indicator";
import MouseFollower from "./mouse-follower";

export default function VideoSplash() {
  return (
    <div className="relative h-screen">
      <Script src="https://player.vimeo.com/api/player.js"></Script>

      <div className="pt-[56.25%] relative lg:w-[125%] h-full w-[500%] translate-x-[-40%] lg:translate-x-[-10%]">
        <iframe
          src="https://player.vimeo.com/video/1004668647?autoplay=1&loop=1&badge=0&autopause=0&background=1&player_id=0&app_id=58479&muted=1"
          allow="autoplay; fullscreen; picture-in-picture"
          className="pointer-events-none absolute top-0 left-0 min-w-full min-h-full border-none"
          allowFullScreen
          title="3_ghq.mov"
        ></iframe>

        <iframe
          src="https://player.vimeo.com/video/1004668659?autoplay=1&loop=1&badge=0&autopause=0&background=1&player_id=0&app_id=58479&muted=1"
          allow="autoplay; fullscreen; picture-in-picture"
          className="pointer-events-none mix-blend-screen opacity-50 absolute top-0 left-0 min-w-full min-h-full border-none"
          allowFullScreen
          title="3_ghq.mov"
        ></iframe>
      </div>

      <div className="flex flex-col justify-center items-center h-full w-full absolute top-0 left-0">
        <ThreeDLogo />
        <ScrollIndicator />
        <MouseFollower />
      </div>
    </div>
  );
}
