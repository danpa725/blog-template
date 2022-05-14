import styled, { css } from "styled-components"
import media from "@styles/utils/media"

import { IsLight } from "@typing/theme"

import { useThemeIsLight } from "@lib/atoms/theme/theme.state"

import { DeleteIcon, FlagFillIcon } from "@components/UI/Atoms/Icons"

const borderStyle = {
    topLeftBottomRight: css`
        border-radius: ${(p) =>
            `${p.theme.bxxxlg} ${p.theme.blg} ${p.theme.bxxxlg} ${p.theme.blg}`};
    `,
    topRightBottomLeft: css`
        border-radius: ${(p) =>
            `${p.theme.blg} ${p.theme.bxxxlg} ${p.theme.blg} ${p.theme.bxxxlg}`};
    `,
}

const backgroundStyle = {
    noneFiltered: (color: string, isLight: boolean) => css`
        background-color: ${(p) =>
            `${p.theme.containerBackgroundColor}${p.theme.opacity50}`};
        backdrop-filter: blur(15px);
        color: ${(p) => (isLight ? color : p.theme.gray2)};

        svg {
            fill: ${color};
            width: 0.725rem;
        }

        &:hover {
            box-shadow: 4px 4px 0px ${color}${(p) => p.theme.opacity70};
        }
    `,
    filtered: (color: string) => css`
        background-color: ${color};
        color: ${(p) => p.theme.white};

        box-shadow: 0 0 0 2.5px ${color}${(p) => p.theme.opacity40};

        svg {
            fill: ${(p) => p.theme.white};
            width: 0.725rem;
        }
        &:hover {
            box-shadow: -4px 4px 0px ${color}${(p) => p.theme.opacity30};
        }
    `,
}

const tagStyle = [
    css`
        ${borderStyle.topLeftBottomRight}
    `,
    css`
        ${borderStyle.topRightBottomLeft}
    `,
    css`
        ${borderStyle.topRightBottomLeft}
    `,
    css`
        ${borderStyle.topLeftBottomRight}
    `,
]

interface TagBoxStyle {
    order: number
    isFiltered: boolean
    color: string
}

const Tag = styled.li<TagBoxStyle & IsLight>`
    transition: box-shadow ease-out 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.15rem;

    width: fit-content;
    min-width: 6rem;
    height: fit-content;
    padding: 0.8rem;
    margin: 0.5rem;

    border: 1.75px solid
        ${({ isFiltered, color, theme }) =>
            isFiltered ? "transparent" : `${color}${theme.opacity20}`};

    font-size: ${(p) => p.theme.sm};
    font-weight: 800;
    letter-spacing: 0.035rem;

    cursor: pointer;
    user-select: none;

    ${({ order }) => tagStyle[order]}
    ${({ color, isFiltered, isLight }) =>
        isFiltered
            ? backgroundStyle.filtered(color)
            : backgroundStyle.noneFiltered(color, isLight)}

    ${media.mediumTablet} {
        width: fit-content;
        min-width: 5rem;

        letter-spacing: 0.02rem;
        padding: 0.75rem;
        font-weight: 700;
    }

    ${media.widePhone} {
        min-width: 2.5rem;
        width: fit-content;
        height: fit-content;

        padding: 0.65rem 0.8rem;
        margin: 0.25rem;
        font-weight: 600;

        border-width: 1.5px;
    }
`
const TagContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;

    gap: 0.25rem;

    width: inherit;
    height: fit-content;

    ${media.widePhone} {
        align-items: center;
        justify-content: center;
        margin-bottom: 0.75rem;
    }
`

interface CategoryTagProps {
    categoryColor: string
    categoryTagArray: string[]
    filteredTagArray: string[]
    setFilteredTagArray: React.Dispatch<React.SetStateAction<string[]>>
}
const getUpdatedFileterdTagArray = (
    slectedTag: string,
    filteredTagArray: string[]
) => {
    const isTagIncluded = filteredTagArray.includes(slectedTag)

    if (isTagIncluded)
        return filteredTagArray.filter((tag) => tag !== slectedTag)
    else return [...filteredTagArray, slectedTag]
}
const CategoryTag = ({
    categoryColor,
    categoryTagArray,
    filteredTagArray,
    setFilteredTagArray,
}: CategoryTagProps) => {
    const resetFilteredTagArray = () => setFilteredTagArray([])

    const isLight = useThemeIsLight()

    return (
        <TagContainer>
            {categoryTagArray?.map((categoryTag, order) => {
                const isFiltered = filteredTagArray.includes(categoryTag)
                return (
                    <Tag
                        onClick={() => {
                            const updatedFilteredTagArray =
                                getUpdatedFileterdTagArray(
                                    categoryTag,
                                    filteredTagArray
                                )
                            setFilteredTagArray(updatedFilteredTagArray)
                        }}
                        color={categoryColor}
                        isFiltered={isFiltered}
                        order={order % 4}
                        isLight={isLight}
                        key={categoryTag}
                    >
                        {isFiltered ? <FlagFillIcon /> : <p>#</p>}
                        {categoryTag}
                    </Tag>
                )
            })}
            {filteredTagArray.length !== 0 && (
                <Tag
                    order={categoryTagArray.length % 4}
                    isFiltered={true}
                    onClick={resetFilteredTagArray}
                    color={categoryColor}
                    isLight={isLight}
                >
                    <DeleteIcon />
                </Tag>
            )}
        </TagContainer>
    )
}

export default CategoryTag