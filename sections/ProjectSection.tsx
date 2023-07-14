import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import emailScheduler from "public/projects/email-scheduler.png";
import faceDetection from "public/projects/faceDetection.gif";
import sorting from "public/projects/sorting.gif";
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
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        Take a look at what I do in my free time <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/aryaraj132"
          className="font-medium underline link-outline text-darkred dark:text-lightred whitespace-nowrap"
          target="_blank"
          rel="noreferrer"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
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
    desc: "An email automation app to automate and schedule your emails to be delivered in a recurring manner with Google O-auth2 for authentication and login. Built using React.js, Express.js, and Node.js.",
    tags: ["React", "Express", "Node", "MongoDB"],
    liveUrl: "https://email-automate.heyaryan.in/",
    codeUrl: "https://github.com/aryaraj132/EmailAutomation",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Face Detection Attendance System",
    type: "Desktop Application",
    image: (
      <Image
        src={faceDetection}
        sizes="100vw"
        fill
        alt="Face Detection Attendance System"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An attendance system using Face Recognition feature with OpenCV library of Python. By training the model with user face we implemented attendance system to recognize the face and mark the attendance of user using provided user id.",
    tags: ["Python", "OpenCv", "Kivy"],
    liveUrl: "https://github.com/aryaraj132/FaceDetection-AttendanceSystem/releases/tag/v1.0.0",
    codeUrl: "https://github.com/aryaraj132/FaceDetection-AttendanceSystem/",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Sorting Algorithm Visualizer",
    type: "Frontend",
    image: (
      <Image
        src={sorting}
        sizes="100vw"
        fill
        alt="Sorting Algorithm Visualizer"
        className="transition-transform duration-500 hover:scale-110 object-center"
      />
    ),
    desc: "Easy to understand and implement Sorting algorithm visualiser made entirely using Vanilla JavaScript.",
    tags: ["Vanilla JS", "HTML", "CSS"],
    liveUrl: "https://aryaraj132.github.io/SortingVisualizer/",
    codeUrl: "https://github.com/aryaraj132/SortingVisualizer",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Employee Management",
    type: "Fullstack",
    image: (
      <Image
        src={employeeManage}
        sizes="100vw"
        fill
        alt="Employee Management"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A Task tracker app where employers can keep a track of their employees’ work done every particular day. • Graphical representation of each employees’ work with pie charts (daily) and bar graph (weekly).",
    tags: ["Next.js", "Express.js", "Docker", "Nginx"],
    liveUrl: "https://employee-manage.heyaryan.in/",
    codeUrl: "https://github.com/aryaraj132/EmployeeManagementNextApp",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
