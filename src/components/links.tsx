import React, { FunctionComponent, PropsWithChildren } from "react"
import { typography } from "./typography"
import { ArrowUpRightIcon } from "lucide-react"
import { default as NextLink } from "next/link"
import Image from "next/image"

const LinkTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <h2
      className={typography(
        {
          size: "text-sm"
        },
        "text-secondary leading-[2.25rem]"
      )}
    >
      {children}
    </h2>
  )
}

const Link: FunctionComponent<PropsWithChildren & { url: string }> = ({
  children,
  url
}) => {
  return (
    <NextLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={typography({ weight: "medium" }, "flex items-center gap-2")}
    >
      {children}{" "}
      <ArrowUpRightIcon className="inline max-w-4 min-w-4" size={16} />
    </NextLink>
  )
}

export const Links: FunctionComponent = () => {
  return (
    <div className="grid h-min grid-cols-2 gap-8">
      <div>
        <LinkTitle>Location</LinkTitle>
        <p
          className={typography(
            { weight: "medium" },
            "flex items-center gap-2"
          )}
        >
          <Image
            width={16}
            height={16}
            src={"https://png.pngtree.com/png-vector/20240906/ourmid/pngtree-flat-vector-illustration-of-indian-flag-waving-and-le-png-image_13761585.png"}
            alt="IT Flag"
          />{" "}
          Bangalore, India
        </p>
      </div>
      <div>
        <LinkTitle>Email</LinkTitle>
        <Link
          url={
            "mailto:divyanshojha2003@gmail.com?subject=We have an interesting offer for you!"
          }
        >
          divyanshojha
        </Link>
      </div>

      <div>
        <LinkTitle>GitHub</LinkTitle>
        <Link url={"https://github.com/divyanshojha99"}>@divyansh</Link>
      </div>

      <div>
        <LinkTitle>LinkedIn</LinkTitle>
        <Link url={"https://www.linkedin.com/in/astrohere"}>
          in/divyansh
        </Link>
      </div>

      <div>
        <LinkTitle>LeetCode</LinkTitle>
        <Link url={"https://leetcode.com/u/divyanshojha99/"}>
          leetcode/divyansh
        </Link>
      </div>

      <div>
        <LinkTitle>Code360</LinkTitle>
        <Link url={"https://www.naukri.com/code360/user/astro"}>
          Code360/divyansh
        </Link>
      </div>
    </div>
  )
}
