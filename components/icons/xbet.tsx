import * as React from "react"
import { SVGProps } from "react"
const Xbet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={160}
    viewBox="0 0 120 120"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 60v60h120V0H0v60zm68.1-20.3c1.6 1 2.9 2.3 2.9 2.9 0 .7-3 3.8-6.6 7-5.2 4.6-6.7 5.5-7.5 4.3-.5-.8-2.8-4.5-5.1-8.3-3.5-5.7-4.3-6.6-5-5C45.9 42.9 38 74.5 38 76c0 .6 9.5-7.7 21.1-18.4l21-19.6h19.1l-5.4 4.8c-2.9 2.7-7.2 6.6-9.5 8.6-2.4 2.1-4.3 4.2-4.3 4.7 0 .4 2.9 5.8 6.5 11.9 3.6 6.1 6.5 11.3 6.5 11.6 0 .2-3.8.4-8.5.4-10.2 0-13.1-1.2-16.3-6.9-1.3-2.3-2.5-4.1-2.7-4.1-.2 0-3.2 2.5-6.7 5.5L52.5 80H38.3C27.5 80 24 79.7 24 78.7c0-.6 1.3-6 2.9-12 1.6-5.9 2.7-10.7 2.3-10.7-.3 0-1.9 1.2-3.4 2.7L23 61.4l.1-6v-5.9l6.7-5.8 6.6-5.7h14.4c11.8 0 14.9.3 17.3 1.7z"
    />
  </svg>
)
export default Xbet
