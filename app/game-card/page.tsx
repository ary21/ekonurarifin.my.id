/* eslint-disable tailwindcss/classnames-order */
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card"

export default function GameCard() {
  return (
    <div className="mx-auto flex max-w-full flex-col items-center space-y-4 pt-4 text-center">
      <p className="max-w-[85%] pb-1 leading-normal text-muted-foreground sm:pb-1 sm:text-lg sm:leading-7 lg:py-5">
        Here are some of my experiences 🗞️
      </p>

      <MagicContainer
        className={
          "mt-60 flex h-auto w-full flex-wrap justify-center gap-4 px-14 pb-10 md:mt-20 lg:mt-20"
        }
      >
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            PT. Prima Nusa Digital (orenda.co.id)
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Dev Lead Team @2020-current
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            CV.Mitra Teknologi Digital (hoscloud.co.id)
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Project Lead @2019-2020
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            CV. Intermedia Solusindo (jogjashop.com)
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Junior Software Developer @2016-2018
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            PT Maelsov Mega Teknologi (cekori.com)
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Freelance @2023
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            Dokterwebsite.id
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Freelance @2020
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            Halal Pro Web Design (hpwebdesign.id)
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Freelance @2019
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="w-4/3 sm:w-4/3 md:w-1/2 lg:w-1/2 flex cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 sm:p-10 shadow-2xl">
          <p className="z-10 lg:whitespace-nowrap lg:text-3xl font-medium text-gray-800 dark:text-gray-200">
            CV. Ardantus Group Sejahtera (ardanhosting.com)
          </p>
          <span className="z-10 font-sm text-gray-800 dark:text-gray-200">
            Freelance @2018
          </span>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </div>
  )
}