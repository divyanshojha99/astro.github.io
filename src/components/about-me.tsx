import React, { FunctionComponent } from "react"
import { typography } from "./typography"

export const AboutMe: FunctionComponent = () => {
  return (
    <div>
      <h2
        className={typography(
          {
            size: "text-md",
            weight: "semibold",
            suggestedMaxWidth: true
          },
          "leading-[2.5rem]"
        )}
      >
        About me
      </h2>
      <p
        className={typography(
          {
            size: "text-sm",
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        I&apos;m a Final Year PostGrad Student, Currently Working as a SDE Intern at SAP.
      </p>
      <br />
      <p
        className={typography(
          {
            size: "text-sm",
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        With a strong Foundation in Data Structures and Algorithms (DSA)
      </p>
      <br />
      <p
        className={typography(
          {
            size: "text-sm",
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        Currently Working on GenAI, Agentic AI, etc.
      </p>
    </div>
  )
}
