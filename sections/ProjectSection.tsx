import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import emailScheduler from "public/projects/email-scheduler.png";
import employeeManage from "public/projects/employee-manage.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-8" ref={elementRef}>
        High-impact work — from open-source AI frameworks to production backend systems.
      </span>

      {/* === Featured / Recent Projects === */}
      <div className="flex flex-wrap">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>

      {/* === Homelab highlight === */}
      <div className="my-10 p-6 rounded-xl border border-darkred/20 dark:border-lightred/20 bg-white/50 dark:bg-[#1B2731]/60">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg bg-darkred/10 dark:bg-lightred/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="fill-darkred dark:fill-lightred" viewBox="0 0 24 24">
              <path d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 6H4V5h16zm0 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 6H4v-4h16z" />
              <circle cx="8" cy="8" r="1" /><circle cx="8" cy="16" r="1" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-base text-darkred dark:text-lightred">Self-Hosted Homelab</h3>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400 max-w-2xl">
              Manage a personal self-hosted server stack with <strong>Docker</strong>, <strong>Traefik</strong> (reverse proxy + TLS), <strong>WireGuard</strong> VPN, Nextcloud, and various self-hosted services — all running on bare-metal. A hands-on proving ground for DevOps patterns I apply at work.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Docker", "Traefik", "WireGuard", "Nginx", "Linux", "Self-hosted"].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-[#E2EFEF] dark:bg-carddark">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="others text-center mb-16 mt-4">
        More on{" "}
        <a
          href="https://github.com/aryaraj132"
          className="font-medium underline link-outline text-darkred dark:text-lightred whitespace-nowrap"
          target="_blank"
          rel="noreferrer"
        >
          my GitHub profile
        </a>
      </div>
    </section>
  );
};

// Gradient placeholder images for new projects (no image file needed)
const PlaceholderA2A = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-6 select-none">
    <div className="text-5xl mb-3 font-mono font-bold tracking-tight text-[#e94560]">A2A</div>
    <div className="text-xs font-mono text-gray-400 tracking-widest">AGENT · TO · AGENT</div>
    <div className="mt-4 flex gap-2 flex-wrap justify-center">
      {["JS/TS", "CJS compat", "Postgres store"].map(t => (
        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-[#e94560]/40 text-[#e94560]">{t}</span>
      ))}
    </div>
  </div>
);

const PlaceholderSSE = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1f38] to-[#1e3c72] text-white p-6 select-none">
    <div className="text-4xl mb-2">⚡</div>
    <div className="text-base font-semibold tracking-wide text-center">Durable SSE Streaming</div>
    <div className="text-xs text-blue-200 mt-1 font-mono">AG-UI · Redis · LangGraph</div>
    <div className="mt-4 flex gap-2 flex-wrap justify-center">
      {["SSE Reconnection", "Redis Pub/Sub + List", "Zero Event Loss"].map(t => (
        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-blue-400/40 text-blue-200">{t}</span>
      ))}
    </div>
  </div>
);

const featuredProjects = [
  {
    title: "A2A Framework — Open Source",
    type: "Open Source / AI",
    image: (
      <div className="relative w-full h-full">
        <PlaceholderA2A />
      </div>
    ),
    desc: "Early adopter & contributor to Google's Agent-to-Agent (A2A) JavaScript framework. Engineered backward CommonJS compatibility for broader ecosystem adoption, and architected a proposal for a Postgres-based durable task store enabling long-running agentic workflows.",
    tags: ["TypeScript", "A2A", "CommonJS", "PostgreSQL", "Open Source"],
    liveUrl: "https://github.com/a2aproject/a2a-js",
    codeUrl: "https://github.com/a2aproject/a2a-js",
    bgColor: "bg-[#1a1a2e]",
  },
  {
    title: "Durable SSE Stream Reconnection",
    type: "AI & Distributed Systems",
    image: (
      <div className="relative w-full h-full">
        <PlaceholderSSE />
      </div>
    ),
    desc: "Architected fault-tolerant SSE stream reconnection for AI agent pipelines using AG-UI, LangGraph, and Redis. Features zero-event-loss replay with Pub/Sub + List sequencing, deduplicated event recovery, and LangGraph checkpointer state catch-up on browser reload or mid-execution join.",
    tags: ["AG-UI", "SSE", "LangGraph", "FastAPI", "Redis Pub/Sub", "CopilotKit"],
    liveUrl: "https://github.com/aryaraj132/agui-reconnect-poc",
    codeUrl: "https://github.com/aryaraj132/agui-reconnect-poc",
    bgColor: "bg-[#0c1f38]",
  },
  {
    title: "Email Scheduler",
    type: "Fullstack",
    image: (
      <Image
        src={emailScheduler}
        sizes="100vw"
        fill
        alt="Email Scheduler"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An email automation app to schedule and automate recurring emails using Google OAuth2. Built with React.js, Express.js, and Node.js — one of my earliest full-stack production deployments.",
    tags: ["React", "Express", "Node", "MongoDB"],
    liveUrl: "https://email-automate.heyaryan.in/",
    codeUrl: "https://github.com/aryaraj132/EmailAutomation",
    bgColor: "bg-[#B4BEE0]",
  },
];

export default ProjectSection;
