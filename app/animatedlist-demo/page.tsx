"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  level: string;
}

let notifications: Item[] = [
  {
    name: "ExpressJS",
    description: "Backend",
    level: "expert",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Typescript",
    description: "Fullstack",
    level: "expert",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "ReactJS",
    description: "Frontend",
    level: "intermediate",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Prisma",
    description: "Backend",
    level: "expert",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "TailwindCSS",
    description: "Frontend",
    level: "intermediate",
    icon: "🎨",
    color: "#FFB800",
  },
  {
    name: "NextJS",
    description: "Frontend",
    level: "beginner",
    icon: "📦",
    color: "#00C9A7",
  },
  {
    name: "NestJS",
    description: "Backend",
    level: "intermediate",
    icon: "🤖",
    color: "#FF3D71",
  },
  {
    name: "Postgres",
    description: "Database",
    level: "intermediate",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "MongoDB",
    description: "Database",
    level: "intermediate",
    icon: "🎨",
    color: "#FFB800",
  },
  {
    name: "Redis",
    description: "Database",
    level: "beginner",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "MYSQL",
    description: "Database",
    level: "intermediate",
    icon: "📦",
    color: "#00C9A7",
  },
  {
    name: "Git",
    description: "Version Control",
    level: "expert",
    icon: "👤",
    color: "#00C9A7",
  },
  {
    name: "Docker",
    description: "DevOps",
    level: "beginner",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Linux VPS",
    description: "DevOps",
    level: "intermediate",
    icon: "📦",
    color: "#FFB800",
  },
  {
    name: "Go Lang",
    description: "Backend",
    level: "beginner",
    icon: "📦",
    color: "#00C9A7",
  },
  {
    name: "DigitalOcean",
    description: "Cloud",
    level: "beginner",
    icon: "🤖",
    color: "#FF3D71",
  },
  {
    name: "AWS",
    description: "Cloud",
    level: "beginner",
    icon: "🎨",
    color: "#FFB800",
  },
  {
    name: "Laravel",
    description: "Fullstack",
    level: "intermediate",
    icon: "📦",
    color: "#00C9A7",
  },
  {
    name: "Chakra UI",
    description: "Frontend",
    level: "intermediate",
    icon: "🤖",
    color: "#FF3D71",
  }
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, level }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{level}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-lg flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
