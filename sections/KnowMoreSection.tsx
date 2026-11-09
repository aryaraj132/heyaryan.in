import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import Timeline from "@/components/Timeline";

const KnowMoreSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const elementRef2 = useRef<HTMLDivElement>(null);
  const isOnScreen2 = useOnScreen(elementRef2);

  const elementRef3 = useRef<HTMLDivElement>(null);
  const isOnScreen3 = useOnScreen(elementRef3);

  const knowMoreSection = useScrollActive(sectionRef);
  return (
    <section ref={sectionRef} id="knowMore" className="section min-h-[700px]">
      <div className="mt-8 mb-20">
        <div className="inline-block">
          <RoughNotation
            type="underline"
            color={`${theme === "light" ? "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h3 className="font-medium text-lg mb-2 md:text-3xl w-max">
              Journey So Far
            </h3>
          </RoughNotation>
        </div>
        <div ref={elementRef}>
          <Timeline />
        </div>

        <div className="inline-block mt-10">
          <RoughNotation
            type="underline"
            color={`${theme === "light" ? "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
            strokeWidth={2}
            order={1}
            show={isOnScreen2}
          >
            <h3 className="font-medium text-lg mb-4 md:text-3xl" ref={elementRef2}>
              My Skills
            </h3>
          </RoughNotation>
        </div>

        {/* Skills by category */}
        <div className="mb-8">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">Languages</h4>
          <div className="domain flex flex-row flex-wrap gap-3">
            {["Python", "JS/TS", "Go", "C/C++", "SQL", "Bash"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium border border-darkred dark:border-lightred text-darkred dark:text-lightred"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">AI & Agentic</h4>
          <div className="domain flex flex-row flex-wrap gap-3">
            {["LangChain", "LangGraph", "AG-UI", "A2A", "RAG", "Langfuse", "MCP"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium border border-darkred dark:border-lightred text-darkred dark:text-lightred"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">Frameworks & Databases</h4>
          <div className="domain flex flex-row flex-wrap gap-3">
            {["Node.js", "React.js", "Next.js", "Django", "FastAPI", "PostgreSQL", "Redis", "ClickHouse"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium border border-darkred dark:border-lightred text-darkred dark:text-lightred"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">Cloud & Infrastructure</h4>
          <div className="domain flex flex-row flex-wrap gap-3">
            {["GCP", "Azure", "Docker", "Kafka", "Terraform", "Nginx", "Linux", "ArgoCD", "Helm"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium border border-darkred dark:border-lightred text-darkred dark:text-lightred"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div className="mt-10 inline-block">
          <RoughNotation
            type="underline"
            color={`${theme === "light" ? "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
            strokeWidth={2}
            order={1}
            show={isOnScreen3}
          >
            <h3 className="font-medium text-lg mb-4 md:text-3xl" ref={elementRef3}>
              Open Source & Projects
            </h3>
          </RoughNotation>
        </div>
        <div className="space-y-4 mb-10">
          <div className="border-l-4 border-darkred dark:border-lightred pl-4">
            <h4 className="font-semibold text-base">A2A Framework — Early Contributor</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Contributed to Google&apos;s A2A (Agent-to-Agent) JavaScript framework as an early adopter.
              Engineered backward CommonJS compatibility for wider ecosystem support and architected a proposal for a Postgres-based durable task store.
            </p>
            <a
              href="https://github.com/a2aproject/a2a-js"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-darkred dark:text-lightred hover:underline mt-1 inline-block font-medium"
            >
              View on GitHub →
            </a>
          </div>
          <div className="border-l-4 border-darkred dark:border-lightred pl-4">
            <h4 className="font-semibold text-base">Durable SSE Stream Reconnection (AG-UI)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Engineered fault-tolerant SSE stream reconnection for agentic pipelines using AG-UI, LangGraph, and Redis Pub/Sub + Lists.
              Ensures zero event loss with race-condition-safe catch-up and state restoration when clients reconnect mid-stream.
            </p>
            <a
              href="https://github.com/aryaraj132/agui-reconnect-poc"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-darkred dark:text-lightred hover:underline mt-1 inline-block font-medium"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* === Creative & Content === */}
        <div className="mt-10 inline-block">
          <RoughNotation
            type="underline"
            color={`${theme === "light" ? "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
            strokeWidth={2}
            order={1}
            show={isOnScreen3}
          >
            <h3 className="font-medium text-lg mb-4 md:text-3xl" ref={elementRef3}>
              Beyond the Code
            </h3>
          </RoughNotation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* <div className="p-5 rounded-xl border border-darkred/20 dark:border-lightred/20 bg-white/50 dark:bg-[#1B2731]/60">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎬</span>
              <div>
                <h4 className="font-semibold text-sm">ARkon — YouTube</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tech, gaming &amp; creative content</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I run a YouTube channel (recently rebranded to <strong>ARkon</strong>) where I explore tech,
              gaming, and creative content — complete with a custom avatar. It&apos;s my outlet for
              storytelling and community building outside of engineering.
            </p>
          </div> */}
          <div className="p-5 rounded-xl border border-darkred/20 dark:border-lightred/20 bg-white/50 dark:bg-[#1B2731]/60">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🖥️</span>
              <div>
                <h4 className="font-semibold text-sm">Self-Hosted Homelab</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Docker · Traefik · WireGuard · Nextcloud</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I self-host my entire personal cloud on bare-metal — Traefik for reverse proxy &amp; TLS,
              WireGuard VPN, Nextcloud for storage, and a growing list of services. It&apos;s the hands-on
              lab that keeps my DevOps instincts sharp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMoreSection;
