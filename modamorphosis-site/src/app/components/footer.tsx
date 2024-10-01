import { cn } from "@/utils/cn";
import React from "react";

type FooterProps = {
  isFixed: boolean;
  hidden?: boolean;
};

export default function Footer(props: FooterProps) {
  const { isFixed = [], hidden = [] } = props;
  return (
    <footer
      className={cn(
        "md:bottom-0 md:pl-[16vw] w-full flex justify-between text-[0.75rem]",
        "uppercase font-alliance px-6 py-4 md:pr-[16vw]",
        hidden ? (isFixed ? "md:fixed" : "md:absolute") : "hidden"
      )}
    >
      <p>&copy;{new Date().getFullYear()} Modamorphosis</p>
      <div className="flex gap-3 underline">
        <p>
          <a href="mailto:info@modamorphosis.com">Contact</a>
        </p>
        <p>
          <a href="https://www.instagram.com/moda_morphosis/">Instagram</a>
        </p>
      </div>
    </footer>
  );
}
