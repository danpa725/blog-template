import { SVGProps } from "react"

const SvgFlagFill = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fill={props?.fill}
            d="M13.66 4.3a1 1 0 0 0-.98-.8H5.5a1 1 0 0 0-1 1v15a1 1 0 1 0 2 0v-6h5.6l.24 1.2c.09.468.503.805.98.8h5.18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4.6l-.24-1.2Z"
        />
    </svg>
)

export default SvgFlagFill
