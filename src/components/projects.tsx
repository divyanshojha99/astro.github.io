import React, { FunctionComponent } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { typography } from "./typography";

type Props = {
  containerClassName?: string;
};

export const Project: FunctionComponent<Props> = ({
  containerClassName
}) => {
  return (
    <div className={cn("flex flex-col gap-8", containerClassName)}>
      {/* Section Heading */}
      <h2
        className={cn(
          typography({ size: "text-3xl", weight: "bold" }),
          "text-center"
        )}
      >
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {[
          // MIS Project
          {
            title: "MIS - Management Information System",
            description:
              "A fully functional E-Police Station system for Uttarakhand Police, developed during DevBhoomi Cyber Hackathon (IIT Roorkee). Built using HTML, CSS, JavaScript, Ajax, PHP, and SQL.",
            techStack: "Tech Stack: HTML, CSS, JavaScript, Ajax, PHP, SQL",
            image: "https://user-images.githubusercontent.com/92323049/190615637-b7875b4d-41e6-40ec-8d22-43ebed536660.png", // Replace with real image
            link: "http://epolicesystem.42web.io/DEVBHOMMI/"
          },
          // Bundel Connect
        //   {
        //     title: "Bundel Connect: Bundelkhandi Translator",
        //     description:
        //       "A translator web app converting Bundelkhandi to Hindi and English using ML-based NLP models, fine-tuned on domain-specific data.",
        //     techStack: "Tech Stack: ReactJS, Python, NLP, Machine Learning",
        //     image: "/assets/images/bundel-connect.png", // Replace with real image
        //     link: "https://github.com/divyanshojha99/astro.github.io"
        //   },
          // AstraFi
          {
            title: "Personal Finance Planner (AstraFi)",
            description:
              "An AI-based personal finance management system for budgeting, investments, and tax planning, integrated with DeepSeek AI for personalized insights.",
            techStack: "Tech Stack: React.js, Crew AI, FastAPI, TailwindCSS, Python",
            image: "/assets/images/finance-planner.png", // Replace with real image
            link: "https://github.com/divyanshojha99/astro.github.io"
          }
        ].map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.02] transition-transform duration-200"
          >
            <Card className="max-w-sm dark:bg-slate-800 shadow-md cursor-pointer h-full flex flex-col justify-between">
              <div>
                <CardHeader className="flex flex-col gap-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} Image`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <div className="flex flex-col gap-2">
                    <CardTitle
                      className={typography({
                        size: "text-lg",
                        weight: "semibold"
                      })}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className={typography({ size: "text-sm" })}
                    >
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </div>
              <CardFooter>
                <CardDescription
                  className={typography({ size: "text-xs" })}
                >
                  {project.techStack}
                </CardDescription>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};
