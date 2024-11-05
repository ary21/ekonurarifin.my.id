"use client"

import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import RetroGrid from "@/components/magicui/retro-grid"

export default function IndexPage() {
  return (
    <section className="container mx-auto mt-20 grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="retro-theme relative flex max-w-[980px] flex-col items-center gap-6">
        <div
          className={cn(
            "group z-10 rounded-full border border-gray-200 bg-gray-200 text-sm transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="z-10 inline-flex items-center justify-center px-4 py-1 text-neutral-600 transition ease-out hover:text-black hover:duration-300 hover:dark:text-black">
            <span>🕹️ welcome to Eko Nur Arifin personal web</span>
          </AnimatedShinyText>
        </div>
        <h1 className="font-pixel z-10 text-center text-3xl font-bold leading-tight tracking-wider text-accent-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Love Code 🚀, Enjoy Exploring 🔭.
          <p className="z-10 mt-0 decoration-gray-400 decoration-4 sm:mt-0 md:mt-0 lg:mt-3">
            Happy Solving Problems 🧩
          </p>
        </h1>
        <p className="z-10 max-w-[700px] text-center text-lg text-accent-foreground sm:text-xl">
          Hi there, I&apos;m Eko Nur Arifin, I from Indonesia. Since 2016 working as a Software
          Developer just after my bachelor of Informatics Engineering graduate.
          Completed many various projects as official work also as freelance
          mostly as Fullstack Web Developer, preferably like as Backend. Enjoy
          coding with js/ts stacks, and have fun to keep exploring.{' '}
          <br />
          <a href="https://s.id/eko-resume" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
            resume docs
          </a>
        </p>
      </div>
      <RetroGrid className="absolute inset-0 z-0 max-w-[1000]" />
      <div className="flex justify-center gap-4">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Linkedin
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
