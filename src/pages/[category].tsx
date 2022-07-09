import Link from "next/link"
import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

import { PageType } from "@typing/page/type"
import { CategoryInfoType } from "@typing/category/info"
import { PostMetaType } from "@typing/post/meta"
import { SeriesInfoType } from "@typing/post/series"

import {
    getAllCategoryPath,
    getLatestCategoryTagArray,
    getSpecificCategoryInfo,
} from "@utils/function/blog-contents-loader/contents/getCategory"
import {
    getCategorySeriesInfo,
    getCategoryLatestPostMeta,
    getCategoryPostMeta,
} from "@utils/function/blog-contents-loader/contents/getCategoryPost"

import {
    CategoryCommonLayout,
    CategoryPaginationButton,
} from "@components/Blog/Category"
import { NextIcon, PrevIcon } from "@components/UI/Atoms/Icons"

import { useAtoms, _slector } from "@lib/jotai"

import { config } from "blog.config"

interface ParamQuery extends ParsedUrlQuery {
    category: string
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
    params,
}) => {
    const { category } = params as ParamQuery

    const categoryPostMeta = await getCategoryPostMeta(category)

    const specificCategoryInfo = await getSpecificCategoryInfo({
        category,
        useTXT: config.useTXT,
    })
    const latestCategoryPostArray = getCategoryLatestPostMeta(categoryPostMeta)
    const latestCategoryTagArray = getLatestCategoryTagArray(
        latestCategoryPostArray
    )
    const categorySeriesInfoArray = getCategorySeriesInfo(categoryPostMeta)

    return {
        props: {
            categoryPostArray: latestCategoryPostArray,
            categoryTagArray: latestCategoryTagArray,
            categorySeriesInfoArray,
            ...specificCategoryInfo,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categoryPaths = await getAllCategoryPath()
    return {
        paths: categoryPaths,
        fallback: false,
    }
}

interface CategoryProps extends CategoryInfoType {
    categoryPostArray: PostMetaType[]
    categoryTagArray: string[]
    categorySeriesInfoArray: SeriesInfoType[]
}

function Category(categoryProps: CategoryProps) {
    const { isLightState: isLight } = useAtoms(_slector("isLight"))

    return (
        <CategoryCommonLayout
            {...categoryProps}
            prevPageComponent={
                <Link href={"/"} passHref>
                    <CategoryPaginationButton
                        type="button"
                        aria-label="back to home"
                        isLight={isLight}
                        isLeft
                    >
                        <PrevIcon width="1.15rem" height="1.15rem" />
                        <p>🏠 Back</p>
                    </CategoryPaginationButton>
                </Link>
            }
            nextPageComponent={
                <Link href={`${categoryProps.categoryUrl}/1`} passHref>
                    <CategoryPaginationButton
                        type="button"
                        aria-label={`read all post about ${categoryProps.category}`}
                        isLight={isLight}
                    >
                        <p>All post</p>
                        <NextIcon width="1.15rem" height="1.15rem" />
                    </CategoryPaginationButton>
                </Link>
            }
        />
    )
}
Category.displayName = "Category" as PageType
export default Category
