import { useFocusTitle } from "@/atoms/atoms"
import useElementObserver from "@/hooks/useElementObserver"
import LineScroll from "@components/UX/LineScroll/LineScroll"
import Tooltip from "@components/UX/Tooltip/Tooltip"

import { useCallback, useRef, useState } from "react"
import styled from "styled-components"

const H1Container = styled.div`
    margin: 3rem 0 2rem 0;
`

const H1Styled = styled.h1`
    font-size: ${(props) => props.theme.title};
    font-weight: 900;

    padding: 0.5rem 0;
    border-bottom: 4px solid ${(props) => props.theme.teal5};

    width: max-content;
`

const H2Styled = styled.h2`
    font-size: ${(props) => props.theme.xlg};
    font-weight: 700;
`

const H3Styled = styled.h3`
    font-size: ${(props) => props.theme.lg};
    font-weight: 700;
    margin-bottom: 1rem;
`

interface H1Props {
    children: string
}

function H1(props: H1Props) {
    const [_, setFocustitle] = useFocusTitle()
    const [active, setActive] = useState(false)

    const ref = useRef<HTMLHeadingElement>(null)

    const updateFocusTitle: IntersectionObserverCallback = useCallback(
        (entries) => {
            entries.forEach((entry) => {
                const top = entry.boundingClientRect.top
                if (top <= 175 && top >= -175) setFocustitle(props.children)
            })
        },
        [props.children, setFocustitle]
    )

    const {} = useElementObserver<HTMLHeadingElement>({
        ref,
        options: {
            root: null,
            rootMarginTop: "-42.5px",
            rootMarginBottom: "0px",
            rootMarginLeft: "0px",
            rootMarginRight: "0px",
            threshold: [0, 1],
        },
        customeCallback: updateFocusTitle,
    })

    return (
        <H1Container>
            <Tooltip
                active={active}
                setActive={setActive}
                tooltipElement={
                    <LineScroll fontWeight={900} fontSize="title" />
                }
            >
                <H1Styled {...props} ref={ref} />
            </Tooltip>
        </H1Container>
    )
}

function H2(props: any) {
    return <H2Styled {...props} />
}

function H3(props: any) {
    return <H3Styled {...props} />
}

export { H1, H2, H3 }
