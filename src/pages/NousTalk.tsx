import { useEffect, useMemo, lazy, Suspense, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useGSAPRouteAnimation } from "@/hooks/useGSAPRouteAnimation";
import { useGSAPScrollRestoration } from "@/hooks/useGSAPScrollRestoration";
import {
  ArrowLeft,
  Zap,
  FileText,
  Cpu,
  BarChart3,
  Video,
  Calendar,
  Building2,
  Layers,
  CreditCard,
  ExternalLink,
  TrendingUp,
  GitBranch,
  BarChart2,
  Monitor,
} from "lucide-react";
import { Badge } from "@/components/lightswind/badge";
import { ShareButton } from "@/components/Share";
import { getCurrentUrl } from "@/lib/shareUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/lightswind/card";
import { LogoLoop, type LogoItem } from "@/components/reactBits/logoLoop";
import {
  InteractiveGrid,
  type InteractiveGridItem,
} from "@/components/reactBits/interactiveGrid";
import {
  AccordionTabs,
  type AccordionTabItem,
} from "@/components/reactBits/accordionTabs";

// Lazy load react-bits components for better performance
const LightRays = lazy(() => import("@/components/reactBits/lightRays"));

const NousTalk = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveScrollPosition } = useGSAPScrollRestoration();

  // GSAP refs
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const workAreasRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  // Technology logos — devicon CDN
  const techLogos: LogoItem[] = useMemo(
    () => [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "React",
        title: "React — Click to visit documentation",
        href: "https://react.dev",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        title: "TypeScript — Click to visit documentation",
        href: "https://www.typescriptlang.org/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
        title: "JavaScript — Click to visit documentation",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        alt: "Redux",
        title: "Redux — Click to visit documentation",
        href: "https://redux-toolkit.js.org",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
        alt: "Ant Design",
        title: "Ant Design — Click to visit documentation",
        href: "https://ant.design",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Tailwind CSS",
        title: "Tailwind CSS — Click to visit documentation",
        href: "https://tailwindcss.com/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        alt: "HTML5",
        title: "HTML5 — Click to visit documentation",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        alt: "CSS3",
        title: "CSS3 — Click to visit documentation",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        alt: "Git",
        title: "Git — Click to visit documentation",
        href: "https://git-scm.com/doc",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
        title: "Node.js — Click to visit documentation",
        href: "https://nodejs.org/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        alt: "Material UI",
        title: "Material UI — Click to visit documentation",
        href: "https://mui.com",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        alt: "GitHub",
        title: "GitHub — Click to visit documentation",
        href: "https://github.com",
      },
    ],
    []
  );

  // Work area breakdown for accordion
  const workAreas = [
    {
      category: "Frontend Development",
      items: [
        {
          name: "React Frontend Architecture",
          description:
            "Developed the complete React frontend ensuring intuitive UX and smooth performance across all therapy and practice management workflows.",
        },
        {
          name: "Material UI + Ant Design Components",
          description:
            "Used Material UI and Ant Design component libraries to implement pixel-perfect Figma designs with consistent visual language.",
        },
        {
          name: "Reusable Component Library",
          description:
            "Built a library of reusable React components to accelerate feature development, enforce consistency, and reduce code duplication across the platform.",
        },
        {
          name: "Redux State Management",
          description:
            "Developed and maintained scalable React applications with Redux, ensuring efficient data flow and predictable state updates across complex multi-page flows.",
        },
        {
          name: "React Hook Form + AgGrid",
          description:
            "Implemented complex forms using React Hook Form and integrated AgGrid for dynamic data presentation, improving user interaction and validation.",
        },
        {
          name: "Performance Optimization",
          description:
            "Optimized front-end performance via lazy loading, memoization, and efficient re-renders — enhancing application responsiveness and user experience.",
        },
      ],
      icon: Monitor,
      color: "blue",
    },
    {
      category: "Video & Scheduling",
      items: [
        {
          name: "WebRTC Live Sessions",
          description:
            "Integrated WebRTC for encrypted live audio and video calling, enabling secure real-time therapy sessions between clinicians and clients from any device.",
        },
        {
          name: "Appointment Scheduling",
          description:
            "Designed and developed appointment scheduling with automated reminders, allowing patients and therapists to book, reschedule, and manage sessions easily.",
        },
        {
          name: "Anywhere Access",
          description:
            "Eliminated commutes, waiting rooms, and time-off barriers by delivering fully remote session support — accessible from any device, any location.",
        },
        {
          name: "Session Security",
          description:
            "All video and audio sessions use end-to-end encrypted WebRTC connections, ensuring HIPAA-compliant communication between clinicians and clients.",
        },
      ],
      icon: Video,
      color: "purple",
    },
    {
      category: "Data Visualization",
      items: [
        {
          name: "D3.js Interactive Charts",
          description:
            "Designed and implemented interactive charts and graphs using D3.js, visualizing complex clinical and operational data for better decision-making and user insights.",
        },
        {
          name: "Analytics Dashboards",
          description:
            "Built rich analytics views for practice managers — tracking session counts, client outcomes, billing summaries, and therapist utilization.",
        },
        {
          name: "Client Progress Tracking",
          description:
            "Visual progress indicators and trend charts helping clinicians monitor client improvement over time with customizable date ranges and filters.",
        },
      ],
      icon: BarChart2,
      color: "green",
    },
    {
      category: "Agile & Collaboration",
      items: [
        {
          name: "Client Requirements Gathering",
          description:
            "Responsible for directly gathering requirements from the client (Techno Venture), translating business needs into technical specifications and user stories.",
        },
        {
          name: "Code Reviews & Mentorship",
          description:
            "Supported junior developers with their tasks and code reviews, ensuring code quality, adherence to standards, and knowledge sharing.",
        },
        {
          name: "Agile / Scrum Methodology",
          description:
            "Followed Agile and Scrum methodologies — actively participating in sprint planning, daily stand-ups, and retrospectives to ensure smooth project execution.",
        },
        {
          name: "GitHub Version Control",
          description:
            "Used GitHub for version control — branching strategies, pull requests, and code reviews to maintain a clean and collaborative development workflow.",
        },
        {
          name: "Deadline Delivery",
          description:
            "Consistently delivered tasks within sprint deadlines, maintaining high quality while adapting to evolving client requirements throughout the project lifecycle.",
        },
      ],
      icon: GitBranch,
      color: "orange",
    },
  ];

  // Key features for interactive grid
  const features = [
    {
      title: "Live Video & Audio Sessions",
      description:
        "Integrated WebRTC for encrypted peer-to-peer audio and video calling, enabling secure real-time therapy sessions between clinicians and patients from any device, eliminating the need for in-person visits.",
      icon: Video,
      color: "purple",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Designed and developed a full appointment scheduling system with automated reminders via email/SMS. Patients can book with their therapist or discover new providers, managing their entire care journey.",
      icon: Calendar,
      color: "blue",
    },
    {
      title: "Practice Management Dashboard",
      description:
        "Comprehensive clinician dashboard for managing patient records, session history, billing, and notes — giving therapists everything they need to run their practice efficiently from a single interface.",
      icon: Building2,
      color: "green",
    },
    {
      title: "D3.js Data Visualization",
      description:
        "Designed and implemented interactive charts and graphs using D3.js — visualizing clinical outcomes, session analytics, and operational metrics to support better decision-making and user insights.",
      icon: BarChart3,
      color: "orange",
    },
    {
      title: "Redux State Management",
      description:
        "Built scalable React applications with Redux Toolkit, ensuring efficient data flow and predictable state updates across complex multi-page therapy workflows, booking flows, and billing modules.",
      icon: Layers,
      color: "teal",
    },
    {
      title: "Advanced Forms & Data Tables",
      description:
        "Implemented complex clinical forms using React Hook Form with robust validation, and integrated AgGrid for dynamic, sortable, filterable data tables used across patient management and billing views.",
      icon: FileText,
      color: "pink",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimized front-end performance through lazy loading, React.memo, useMemo/useCallback, and efficient re-render strategies — significantly improving application responsiveness on low-bandwidth connections.",
      icon: Zap,
      color: "yellow",
    },
    {
      title: "Stripe Payment Integration",
      description:
        "Integrated Stripe for secure billing — enabling clinics to collect session payments, manage subscriptions, and handle billing workflows for individual therapists and multi-provider practices.",
      icon: CreditCard,
      color: "red",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────
  // GSAP PAGE ENTRANCE ANIMATIONS
  // ─────────────────────────────────────────────────────────────────────────────
  useGSAP(
    () => {
      const page = pageRef.current;
      if (!page) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          const heroSection = heroRef.current;
          if (heroSection) {
            const logo = heroSection.querySelector(".hero-logo");
            const subtitle = heroSection.querySelector(".hero-subtitle");
            const badges = heroSection.querySelectorAll(".hero-badge");
            const description = heroSection.querySelector(".hero-description");

            if (logo) {
              gsap.set(logo, { opacity: 0, scale: 0.3, rotateY: -180, rotateZ: -15, transformPerspective: 1200, filter: "brightness(2)" });
              tl.to(logo, { opacity: 1, scale: 1, rotateY: 0, rotateZ: 0, filter: "brightness(1)", duration: 1.2, ease: "elastic.out(1, 0.5)" }, 0);
            }

            if (titleRef.current) {
              const titleSplit = new SplitText(titleRef.current, { type: "chars", mask: "chars" });
              gsap.set(titleSplit.chars, { opacity: 0, y: 120, rotateX: -90, rotateY: gsap.utils.wrap([-20, 20, -15, 15, -10, 10]), scale: 0.5, transformPerspective: 1200, transformOrigin: "center bottom" });
              tl.to(titleSplit.chars, { opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1, duration: 1, stagger: { each: 0.04, from: "start", ease: "power2.out" }, ease: "back.out(1.7)" }, 0.15);
            }

            if (subtitle) {
              gsap.set(subtitle, { opacity: 0, x: 80, filter: "blur(10px)" });
              tl.to(subtitle, { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 0.5);
            }

            if (badges.length > 0) {
              badges.forEach((badge, i) => {
                const directions = [{ x: -40, y: 30, rotate: -15 }, { x: 0, y: 50, rotate: 0 }, { x: 40, y: 30, rotate: 15 }];
                const dir = directions[i % directions.length];
                gsap.set(badge, { opacity: 0, scale: 0, x: dir.x, y: dir.y, rotation: dir.rotate });
              });
              tl.to(badges, { opacity: 1, scale: 1, x: 0, y: 0, rotation: 0, duration: 0.8, stagger: 0.12, ease: "elastic.out(1, 0.4)" }, 0.7);
            }

            if (description) {
              const descSplit = new SplitText(description, { type: "words", wordsClass: "gsap-word" });
              gsap.set(descSplit.words, { opacity: 0, y: 25, filter: "blur(4px)" });
              tl.to(descSplit.words, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.02, ease: "power2.out" }, 1.0);
            }
          }

          // Helper to animate each section on scroll
          const animateSection = (ref: React.RefObject<HTMLDivElement | null>) => {
            if (!ref.current) return;
            const icon = ref.current.querySelector(".section-icon");
            const title = ref.current.querySelector(".section-title");
            const subtitle = ref.current.querySelector(".section-subtitle");
            const content = ref.current.querySelector(".section-content");

            if (icon) {
              gsap.set(icon, { scale: 0, rotation: -180 });
              gsap.to(icon, { scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.4)", scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play reverse play reverse" } });
            }
            if (title) {
              gsap.set(title, { opacity: 0, x: -60, filter: "blur(8px)" });
              gsap.to(title, { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 78%", toggleActions: "play reverse play reverse" } });
            }
            if (subtitle) {
              gsap.set(subtitle, { opacity: 0, y: 20 });
              gsap.to(subtitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 76%", toggleActions: "play reverse play reverse" } });
            }
            if (content) {
              gsap.set(content, { opacity: 0, y: 100, scale: 0.85, rotateX: 25, transformPerspective: 1400, transformOrigin: "center top" });
              gsap.to(content, { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 70%", toggleActions: "play reverse play reverse" } });
            }
          };

          animateSection(techStackRef);
          animateSection(workAreasRef);
          animateSection(featuresRef);

          if (summaryRef.current) {
            gsap.set(summaryRef.current, { opacity: 0, y: 100, scale: 0.85, rotateX: 20, transformPerspective: 1400, transformOrigin: "center top", boxShadow: "0 0 0 rgba(0,0,0,0)" });
            gsap.to(summaryRef.current, { opacity: 1, y: 0, scale: 1, rotateX: 0, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: summaryRef.current, start: "top 80%", toggleActions: "play reverse play reverse" } });
            const summaryCards = summaryRef.current.querySelectorAll(".summary-card");
            if (summaryCards.length > 0) {
              gsap.set(summaryCards, { opacity: 0, y: 50, scale: 0.9 });
              gsap.to(summaryCards, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.4)", scrollTrigger: { trigger: summaryRef.current, start: "top 70%", toggleActions: "play reverse play reverse" } });
            }
          }
        }
      );

      mm.add("(max-width: 767px)", () => {
        const mobileTl = gsap.timeline();
        if (heroRef.current) {
          const logo = heroRef.current.querySelector(".hero-logo");
          const badges = heroRef.current.querySelectorAll(".hero-badge");
          if (logo) { gsap.set(logo, { opacity: 0, scale: 0.8, y: -20 }); mobileTl.to(logo, { opacity: 1, scale: 1, y: 0, duration: 0.5 }, 0); }
          if (titleRef.current) { gsap.set(titleRef.current, { opacity: 0, y: 30 }); mobileTl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.1); }
          if (badges.length > 0) { gsap.set(badges, { opacity: 0, scale: 0.8 }); mobileTl.to(badges, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 }, 0.3); }
        }
        [techStackRef.current, workAreasRef.current, featuresRef.current, summaryRef.current].filter(Boolean).forEach((section) => {
          if (section) {
            gsap.set(section, { opacity: 0, y: 50 });
            gsap.to(section, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play reverse play reverse" } });
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        [heroRef.current, techStackRef.current, workAreasRef.current, featuresRef.current, summaryRef.current].filter(Boolean).forEach((section) => {
          if (section) gsap.set(section, { opacity: 1, clearProps: "all" });
        });
      });
    },
    { scope: pageRef }
  );

  useGSAPRouteAnimation({
    containerRef: pageRef,
    transitionType: "home-to-project",
    enabled: location.state?.from !== undefined,
  });

  const interactiveGridItems: InteractiveGridItem[] = useMemo(
    () =>
      features.map((feature) => {
        const Icon = feature.icon;
        return { id: feature.title, title: feature.title, description: feature.description, icon: <Icon className="w-6 h-6" />, color: feature.color };
      }),
    [features]
  );

  const accordionTabItems: AccordionTabItem[] = useMemo(
    () =>
      workAreas.map((area) => {
        const Icon = area.icon;
        return {
          id: area.category,
          label: area.category,
          icon: <Icon className="w-4 h-4" />,
          color: area.color,
          badge: area.items.length,
          content: (
            <div className="space-y-3">
              {area.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  style={{ animation: `slideInLeft 0.4s ease-out ${itemIdx * 0.05}s both` }}
                  className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 group"
                >
                  <h4 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          ),
        };
      }),
    [workAreas]
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent relative route-enter-content">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">

        {/* Back Button and Share */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3 sm:gap-4 route-enter-child">
          <button
            onClick={(e) => {
              e.preventDefault();
              const scrollY = saveScrollPosition();
              navigate("/", { state: { scrollTo: "projects", scrollY, from: "home-to-project" } });
            }}
            className="cursor-pointer flex items-center gap-2 text-foreground hover:text-primary transition-colors group touch-manipulation"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back</span>
          </button>
          <div className="flex items-center gap-3">
            <a
              href="https://noustalkclinic.noustalk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/live inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-full bg-emerald-500/90 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Production
              <ExternalLink className="w-3 h-3 opacity-70 group-hover/live:opacity-100 group-hover/live:translate-x-0.5 transition-all duration-200" />
            </a>
            <ShareButton
              shareData={{
                title: "NousTalk — Online Therapy Platform",
                description:
                  "Secure online therapy and practice management platform connecting therapists and clients through encrypted live audio and video sessions.",
                url: getCurrentUrl(),
              }}
              variant="outline"
              size="md"
              showLabel={true}
              position="bottom"
              className="shrink-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Hero Header */}
        <div ref={heroRef} className="mb-16 route-enter-child">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="p-4 rounded-2xl bg-transparent flex items-center justify-center min-w-[120px] h-[120px] hero-logo">
              <img
                src="/noustalk-logo.png"
                alt="NousTalk Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2">
                NousTalk
              </h1>
              <p className="text-lg text-muted-foreground mb-2 hero-subtitle">
                Online Therapy Platform • Practice Management
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <a href="https://noustalkclinic.noustalk.com/" target="_blank" rel="noopener noreferrer" className="group/badge hero-badge">
                  <Badge variant="success" size="lg" className="cursor-pointer hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300">
                    <span className="relative flex h-2 w-2 mr-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Live & Active
                    <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200" />
                  </Badge>
                </a>
                <Badge variant="info" size="lg" className="hero-badge">
                  Client Project
                </Badge>
                <Badge variant="default" size="lg" className="hero-badge">
                  Production
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl hero-description">
            Transforming how clinicians deliver care and how clients experience mental and behavioral health support.
            A secure, online therapy and practice management solution connecting therapists and clients through
            encrypted live audio and video sessions. Patients can access support from anywhere, anytime — eliminating
            long commutes, waiting rooms, and the need to take time off work.
          </p>
        </div>

        {/* Technology Stack - LogoLoop */}
        <div ref={techStackRef} className="mb-16 relative">
          <Suspense fallback={null}>
            <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
              <LightRays raysOrigin="top-center" raysColor="#07eae6" raysSpeed={1} lightSpread={12} rayLength={0.7} followMouse={true} mouseInfluence={0.1} className="w-full h-full" />
            </div>
          </Suspense>
          <div className="mb-6 relative z-10 section-header">
            <div className="mb-2 flex items-center gap-2">
              <div className="section-icon"><Cpu className="w-8 h-8 text-primary" /></div>
              <h2 className="text-2xl sm:text-3xl font-bold section-title">Technology Stack</h2>
            </div>
            <p className="text-muted-foreground section-subtitle">Technologies used to build the platform</p>
          </div>
          <div className="relative py-8 px-2 rounded-2xl bg-transparent section-content">
            <LogoLoop logos={techLogos} speed={80} direction="left" logoHeight={48} gap={48} pauseOnHover={true} fadeOut={true} scaleOnHover={true} className="w-full" ariaLabel="Technology stack logos" />
          </div>
        </div>

        {/* Work Areas - AccordionTabs */}
        <div ref={workAreasRef} className="mb-16 relative">
          <div className="mb-6 section-header">
            <div className="mb-2 flex items-center gap-2">
              <div className="section-icon"><TrendingUp className="w-8 h-8 text-primary" /></div>
              <h2 className="text-2xl sm:text-3xl font-bold section-title">Responsibilities & Work Areas</h2>
            </div>
            <p className="text-muted-foreground section-subtitle">
              Full stack development, video integration, data visualization, and agile delivery
            </p>
          </div>
          <div className="section-content">
            <AccordionTabs items={accordionTabItems} defaultActiveId={accordionTabItems[0]?.id} orientation="horizontal" className="w-full" />
          </div>
        </div>

        {/* Key Features - InteractiveGrid */}
        <div ref={featuresRef} className="mb-16 relative">
          <div className="mb-6 section-header">
            <div className="mb-2 flex items-center gap-2">
              <div className="section-icon"><Zap className="w-8 h-8 text-primary" /></div>
              <h2 className="text-2xl sm:text-3xl font-bold section-title">Key Features & Capabilities</h2>
            </div>
            <p className="text-muted-foreground section-subtitle">
              Core features developed and delivered for the NousTalk platform
            </p>
          </div>
          <div className="section-content">
            <InteractiveGrid items={interactiveGridItems} columns={2} enableHoverEffects={true} enableParticles={true} enableLightRays={true} className="w-full" />
          </div>
        </div>

        {/* Project Summary */}
        <div ref={summaryRef} className="mb-12">
          <Card className="backdrop-blur-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                Project Summary
              </CardTitle>
              <CardDescription className="text-base">
                Telehealth platform for mental and behavioral health care
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg summary-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Project Name
                  </h3>
                  <p className="text-foreground font-medium text-lg mb-1">NousTalk</p>
                  <p className="text-sm text-muted-foreground">Online Therapy Platform</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">Client: Techno Venture</p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg summary-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    Duration
                  </h3>
                  <p className="text-foreground font-medium text-lg mb-1">~1 Year</p>
                  <p className="text-sm text-muted-foreground">2023 — 2024</p>
                  <div className="mt-3 flex gap-2">
                    <Badge variant="info" size="sm">Full Stack Dev</Badge>
                    <Badge variant="outline" size="sm">Completed</Badge>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg summary-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    Status
                  </h3>
                  <a href="https://noustalkclinic.noustalk.com/" target="_blank" rel="noopener noreferrer">
                    <Badge variant="success" size="lg" className="mb-3 cursor-pointer hover:scale-105 transition-transform">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      Live & Active
                      <ExternalLink className="w-3 h-3 ml-1.5" />
                    </Badge>
                  </a>
                  <p className="text-sm text-muted-foreground">noustalkclinic.noustalk.com</p>
                  <p className="text-xs text-muted-foreground mt-2">Healthcare & Telehealth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default NousTalk;
