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

  const knowMoreSection = useScrollActive(sectionRef);
  return (
    <section ref={sectionRef} id="knowMore" className="section min-h-[700px]">
      <div className="mt-8 mb-20">
        <div className="inline-block">
      <RoughNotation
          type="underline"
          color={`${theme === "light" ?  "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
        <h3 className="font-medium text-lg mb-2 md:text-3xl w-max">
          Jouney So Far
        </h3>
        </RoughNotation>
        </div>
        <div ref={elementRef}>
        <Timeline /> 
        </div>
        <div className="inline-block">
      <RoughNotation
          type="underline"
          color={`${theme === "light" ?  "rgb(140, 0, 0)" : "rgb(220, 0, 0)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen2}
        >
        <h3 className="font-medium text-lg mb-2 md:text-3xl">
          My Skills
        </h3>
        </RoughNotation>
        </div>
        <div className="domain flex flex-row flex-wrap justify-around" ref={elementRef2}>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/python.png" alt="Python" />
            <div className="caption">Python</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/javascript.png" alt="JavaScript" />
            <div className="caption">JS</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/c-plus.png" alt="C/C++" />
            <div className="caption">C/C++</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/java.svg" alt="JAVA" />
            <div className="caption">Java</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/django-icon.png" alt="Django" />
            <div className="caption">Django</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/MERN.png" alt="MERN Stack" />
            <div className="caption">MERN Stack</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/docker.png" alt="Docker" />
            <div className="caption">Docker</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/NGINX.png" alt="NGINX" />
            <div className="caption">Nginx</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/github.png" alt="Github" />
            <div className="caption">Github</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/terminal.svg" alt="Linux" />
            <div className="caption">Linux</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/sql.png" alt="SQL" />
            <div className="caption">SQL</div>
          </div>
          <div className="icon-pannel">
            <Image width={120} height={120} src="/icons/cosmos.svg" alt="Cosmos DB" />
            <div className="caption text-xs">Cosmos DB</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMoreSection;
