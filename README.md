<br />

![next your home banner](https://capsule-render.vercel.app/api?type=soft&color=F3ECDA&height=130&animation=ScaleIn&section=header&text=Next%20Your%20Home%20🏠&fontSize=35)

<br />

```ts
const START = "Your journey 🎉"
const KR = "안녕하세요"
const EN = "Hellow"
```

<br />

1. [What is this?](#what-is-this)
    - [🏠 Blog](#-blog)
    - [🛠 Tech stack](#-tech-stack)
2. [Why?](#why)

    - [😀 Easy to start](#-easy-to-start)
    - [🔥 Performance](#-performance)
    - [😲 Intuitive post grouping](#-intuitive-post-grouping)
    - [📔 Reading focused UI/UX](#-reading-focused-uiux)
    - [🎨 Show your personality with colors](#-show-your-personality-with-colors)
    - [🍻 Features](#-features)

3. [How can I start?](#how-can-i-start)
4. [How can I customize?](#how-can-i-customize)
5. [Questions you might have](#questions-you-might-have)
6. [LICENSE](#license)

<br />

# What is this?

## 🏠 Blog

1.  Focus on **Content**
2.  Focus on **UI/UX**
3.  Focus on **Performance**
4.  Focus on **Intuitive Layout**
5.  Focus on **Maintanance**
6.  Focus on **Customizability**

## 🛠 Tech stack

1.  **Language** 📜
    -   `typescript`
2.  **Framework** ⚙️
    -   `NextJs`
3.  **Styling** 💅
    -   `styled-components`
4.  **Markup** 📝
    -   `mdx`
        -   📌 Rich support over `markdown`
        -   📌 Use `javascript`
        -   📌 Use `JSX`
        -   🔎 Explore more features on [official MDX site](https://mdxjs.com/table-of-components/)
    -   `mdx-bundler`
        -   📦 Import pure `react component` in `.mdx` post files
        -   🔎 Visit [mdx-bundler](https://github.com/kentcdodds/mdx-bundler) for more config options

<br />

# Why should I use this?

## 😀 Easy to start

-   📌 You know `react`
-   📌 Zero env configuration
-   📌 Easy deploying with `vercel` [(🔎 Power of vercel + NextJs)](https://vercel.com/solutions/nextjs)
-   📦 Easy posting with built in [CLI 📜](https://github.com/danpa725/blog-post-generator) tool

## 🔥 Performance

-   📌 Light house score `100`
-   📌 SEO support with `next-seo` [(🔎 More info about this package)](https://github.com/garmeeh/next-seo)
-   📌 Bundle size optimized
    -   `Preact` on production build (`3kb`) [(🔎 What is Preact?)](https://preactjs.com)
    -   etc...

## 😲 Intuitive post grouping

-   📌 Category based grouping
    -   And you can describe the category
-   📌 Category pagination
    -   Configurable with `blog.config.ts`
-   📌 Post series
    -   Group your post by subtitle

## 📔 Reading focused UI/UX

-   📌 Intuitive UI Elements
-   📌 Easy navigation with `post controller`
-   📌 Less vertical scrolling for searching post
-   📌 Device width based, sized text content

## 🎨 Show your personality with colors

-   📌 You can set color for each category and post
-   📌 Your personal color will be adapted
-   📌 Different, but consistent design

## 🍻 Features

-   📌 `Light`/`Dark` mode full support
-   📌 Intergrate Profile with full feature of `mdx`
-   📌 Table of content on `desktop`/`mobile` (optional on mobile)
-   📌 Image optimization with `next/image` [(🔎 More info about next/image)](https://nextjs.org/docs/api-reference/next/image)
-   📌 Automatic image size support for `static`/`external`
-   📌 Automatic pagination
-   📌 Support `sitemap`, `rss` generation on build
-   📌 Math `katex` support (optional)
-   📌 Automatic post refreshing in `dev` mode
-   📌 Specific `error` informations about blog posts
-   etc...

<br />

# How can I start?

1.  **Click** `Use this template` button in this page and make own `repo` with **`1commit`**
    -   Get this `repo` to your `local` development env
2.  **Install packages**

    ```bash
        pnpm i
    ```

    -   this project use `pnpm` for package managing
    -   if `pnpm` is not installed, visit [pnpm install guide](https://pnpm.io/installation)

        ```bash
        npm install -g pnpm
        ```

3.  **Update 📜 `blog.config.ts`, 📜 `public/robots.txt`**

    1.  `blog.config.ts`:
        -   `authorInfo`
            -   name
            -   currentState
            -   currentGoal
            -   contacts
        -   `blogInfo`
            -   url: deploy url
            -   siteName
            -   subtitle
            -   language
    2.  at `public/robots.txt`:
        -   update `Sitemap` to your deploy url
    3.  optional `public/mainfest.json`:
        -   update `name`, `short_name`

4.  **Dev test**
    ```bash
        pnpm dev
    ```
    -   port `3000` will be used by default
5.  **First post**
    ```bash
        pnpm post
    ```
6.  **Replace **`Logo Icon`** with your own Logo**

    -   Replace **`public/logo.svg`** to your own **`svg`** logo
    -   Run this command in terminal

        ```bash
        npx @svgr/cli public/logo.svg --out-dir src/components/UI/Atoms/Icons --icon --typescript
        ```

    -   <details>
        <summary>
            <strong>
            🤔 Why shoud I do this?
            </strong>
        </summary>

        1. This process save `bundle size` about `2.7kb` by not importing `next/image` from the profile page
        2. Also, unlike `img`, `svg` component is rendered immediately
        3. Even if it's little bit annoying, please do it for faster loading
        4. Results: `src/components/UI/Atoms/Icons/Logo.tsx`
           <br />

            ```tsx
            import * as React from "react"
            import { SVGProps } from "react"

            const SvgLogo = (props: SVGProps<SVGSVGElement>) => ({
                /*... Your Svg Icon ...*/
            })

            export default SvgLogo
            ```

        </details>

7.  **Build test**
    ```bash
        pnpm build
    ```
    -   build result in `.next` folder
8.  **Deploy** with `vercel`
    1.  make [account](https://vercel.com/login)
    2.  choose your blog `repo`
    3.  deploy your blog

<br />

# How can I customize?

-   Check config options in `blog.config.ts`
-   Easy to customize
    1.  🫡 You know `react`
    2.  🫡 You know `styled-components`
    3.  🫡 Just modify the style that you want to
-   Whole project folder includes `README.md` about **structures** and **description**

<br />

# Questions you might have!

<details>
  <summary>
    <strong>
      🤔 Why not use <code>gatsby</code>?
    </strong>
  </summary>

1.  Stricter than <code>NextJs</code>
2.  Use <code>graphql</code> for content api

    -   just use <code>typescript</code>
    -   for the people don't know about <code>graphql</code>

3.  Rely on <code>gatsby</code> community to implement some feature
<br />
</details>

<details>
  <summary>
    <strong>
     🤔 How much fast you mean?
    </strong>
  </summary>

<quote>Visit the [Next Your Home Guide Blog 🎉](https://next-your-home-guide.vercel.app) built with this template!</quote>

1.  Run [pagespeed test](https://pagespeed.web.dev)

    -   `desktop` result: `100` / `100` / `100` / `100`
    -   `mobile` result: `100` / `97` / `100` / `100`

2.  Run [Webpage Test](https://www.webpagetest.org/): **pretty good**

3.  Check build `bundle size` result below
    ```bash
    Page                                           Size     First Load JS
    ┌ ● /                                          1.48 kB        92.1 kB
    ├   /_app                                      0 B            75.8 kB
    ├ ● /[category]                                810 B          91.4 kB
    ├ ● /[category]/[pageNumber]                   932 B          91.5 kB
    ├ ● /[category]/[pageNumber]/[postTitle]       1.69 kB        97.4 kB
    ├ ○ /404                                       270 B          76   kB
    ├ ○ /500                                       269 B          76   kB
    ├ ● /category                                  2.79 kB        79   kB
    └ ● /profile                                   1.96 kB        89   kB
    + First Load JS shared by all                  75.8 kB
    ├ chunks/main-625f46e484218a7a.js              36.8 kB
    ├ chunks/pages/_app-eae174cb1eaf3402.js        38.2 kB
    ├ chunks/webpack-3373b0f21806983f.js           827 B
    └ css/3c1f33eef2e27332.css                     811 B
    ```
    </details>

<br />

# LICENSE

[MIT](https://github.com/danpa725/next-your-home/blob/main/LICENSE)
