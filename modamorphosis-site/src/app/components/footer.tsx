import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 right-0 w-full flex justify-between md:pl-[16vw] text-[0.75rem] uppercase font-alliance p-4 md:pr-[16vw]">
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
