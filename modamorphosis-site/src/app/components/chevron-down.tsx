import React from "react";

type chevProps = {
  color: string;
  style?: string;
};

export function ChevronDown(props: chevProps) {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-2 bounce"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.690868 0.89093C0.972052 0.609762 1.42792 0.609762 1.70911 0.89093L5.99999 5.18183L10.2909 0.89093C10.572 0.609762 11.0278 0.609762 11.3091 0.89093C11.5902 1.17211 11.5902 1.62799 11.3091 1.90917L6.50911 6.70917C6.37407 6.84419 6.19095 6.92005 5.99999 6.92005C5.80903 6.92005 5.62589 6.84419 5.49087 6.70917L0.690868 1.90917C0.409684 1.62799 0.409684 1.17211 0.690868 0.89093Z"
        fill="#F4F4F4"
      />
    </svg>
  );
}
