import { SVGProps } from "react"

const SvgLayersAlt = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m12 23.27-9-7 1.62-1.26 7.37 5.73 7.38-5.739L21 16.27l-9 7ZM12 19l-9-7 1.62-1.26 7.37 5.73 7.38-5.74L21 12l-9 7Zm0-4.27L4.63 9 3 7.73l9-7 9 7L19.36 9 12 14.73Z"
            fill={props?.fill}
        />
    </svg>
)

export default SvgLayersAlt
