import type { SVGProps } from "react";

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <g className="download-outline">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.25 13.25h9m-8.5-6.5 4 3.5 4-3.5m-4-5v8.5"/>
    </g>
  </svg>
);

export default DownloadIcon;