import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const timelineData = [
  {
    id: 1,
    text: "Joined Mailmodo as Software Developer Full-time",
    date: "June, 2023",
    category: {
      tag: "Full-time",
      color: "#018f69",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    id: 2,
    text: "Joined Mailmodo as Software Developer Intern",
    date: "November, 2022",
    category: {
      tag: "Internship",
      color: "#018f69",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    id: 3,
    text: "Joined VibenCode as Backend Developer Intern",
    date: "April, 2022",
    category: {
      tag: "Internship",
      color: "#018f69",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    id: 4,
    text: "Started Freelancing in 2nd year of college",
    date: "May, 2020",
    category: {
      tag: "Freelanace",
      color: "#018f69",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
  {
    id: 5,
    text: "Started B.Tech in Computer Science and Engineering",
    date: "August, 2019 - June, 2023",
    category: {
      tag: "College",
      color: "#018f69",
    },
    // link: {
    //   url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
    //   text: "Read more",
    // },
  },
];

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `20% bottom`,
      },
    });

    tl.fromTo(
      q(".timeline-container"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(
        q(".item-odd"),
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, stagger: 0.2 },
        "<25%"
      )
      .fromTo(
        q(".item-even"),
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, stagger: 0.2 },
        "<10%"
      );
  }, []);

  return (
    <div className="timeline-group mb-4" ref={sectionRef}>
      {timelineData.length > 0 && (
        <div className="timeline-container after:bg-darkred after:dark:bg-lightred">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

type TimelineDataInterface = {
  id: number;
  text: string;
  date: string;
  category: {
    tag: string;
    color: string;
  };
  link?: {
    url: string;
    text: string;
  };
};

const TimelineItem: React.FC<{ data: TimelineDataInterface }> = ({ data }) => (
  <div className={`timeline-item ${data.id % 2 ? `item-odd` : `item-even` }`}>
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time className="text-darkred dark:text-lightred">{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle border-darkred dark:border-lightred" />
    </div>
  </div>
);

export default Timeline;
