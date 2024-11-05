import * as React from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container inset-x-0 bottom-0 flex flex-col items-center justify-between gap-4  rounded-lg md:h-24  md:flex-row">
        <div className="flex flex-col items-center gap-4 px-0 md:flex-row md:gap-2 md:px-0">
          {/* <Icons.logo /> */}
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} - Brought kindess from {" "}
            <a
              href={'https://htmlrev.com/free-nextjs-templates.html'}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              kathan.
            </a>
            
          </p>
        </div>
      </div>
    </footer>
  )
}