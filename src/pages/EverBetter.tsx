import { useEffect, useMemo, lazy, Suspense, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useGSAPRouteAnimation } from "@/hooks/useGSAPRouteAnimation";
import { useGSAPScrollRestoration } from "@/hooks/useGSAPScrollRestoration";
import {
  ArrowLeft,
  Cpu,
  Layers,
  Zap,
  FileText,
  Users,
  Mic,
  CreditCard,
  Video,
  Building2,
  BarChart3,
  TrendingUp,
  Server,
  Database,
  Cloud,
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
import { InteractiveGrid, type InteractiveGridItem } from "@/components/reactBits/interactiveGrid";
import { AccordionTabs, type AccordionTabItem } from "@/components/reactBits/accordionTabs";

// Lazy load react-bits components for better performance
const LightRays = lazy(() => import("@/components/reactBits/lightRays"));

// Lazy load heavy components
const Shield = lazy(() => import("lucide-react").then((mod) => ({ default: mod.Shield })));

const EverBetter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useAppSelector((state) => state.theme.theme);
  const isDarkMode = theme === "dark";
  const { saveScrollPosition } = useGSAPScrollRestoration();

  // GSAP refs
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  // Technology logos — devicon CDN
  const techLogos: LogoItem[] = useMemo(
    () => [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        alt: "Next.js",
        title: "Next.js 15 — Click to visit documentation",
        href: "https://nextjs.org/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        title: "TypeScript 5 — Click to visit documentation",
        href: "https://www.typescriptlang.org/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "React",
        title: "React 19 — Click to visit documentation",
        href: "https://react.dev",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
        title: "Node.js Runtime — Click to visit documentation",
        href: "https://nodejs.org/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        alt: "MongoDB",
        title: "MongoDB — Click to visit documentation",
        href: "https://www.mongodb.com/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        alt: "Express.js",
        title: "Express.js — Click to visit documentation",
        href: "https://expressjs.com",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        alt: "Docker",
        title: "Docker — Click to visit documentation",
        href: "https://docs.docker.com",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        alt: "Google Cloud",
        title: "Google Cloud Platform — Click to visit documentation",
        href: "https://cloud.google.com/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        alt: "Redis",
        title: "Redis — Click to visit documentation",
        href: "https://redis.io/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        alt: "Kubernetes",
        title: "Kubernetes / GKE — Click to visit documentation",
        href: "https://kubernetes.io/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        alt: "Terraform",
        title: "Terraform IaC — Click to visit documentation",
        href: "https://developer.hashicorp.com/terraform/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        alt: "Nginx",
        title: "Nginx API Gateway — Click to visit documentation",
        href: "https://nginx.org/en/docs",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        alt: "Redux Toolkit",
        title: "Redux Toolkit — Click to visit documentation",
        href: "https://redux-toolkit.js.org",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
        alt: "Ant Design",
        title: "Ant Design UI — Click to visit documentation",
        href: "https://ant.design/docs/react/introduce",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        alt: "AWS",
        title: "AWS (S3, Transcribe) — Click to visit documentation",
        href: "https://docs.aws.amazon.com",
      },
    ],
    []
  );

  // Architecture & services breakdown
  const architecture = [
    {
      category: "Frontend & UI",
      items: [
        { name: "Next.js 15 + React 19", description: "App Router, Server Components, streaming SSR" },
        { name: "TanStack Query", description: "Server state management and data fetching" },
        { name: "Redux Toolkit", description: "Client-side global state management" },
        { name: "Ant Design", description: "Enterprise-grade UI component library" },
        { name: "D3.js", description: "Custom data visualizations and interactive charts" },
        { name: "Centrifugo WebSocket", description: "Real-time updates via WebSocket pub/sub" },
        { name: "AWS Transcribe", description: "AI-powered speech-to-text for clinical notes" },
        { name: "WebRTC", description: "Peer-to-peer video & audio consultations" },
      ],
      icon: TrendingUp,
      color: "blue",
    },
    {
      category: "Backend Microservices",
      items: [
        { name: "17 Node.js / Express.js Services", description: "Each service owns a bounded domain context" },
        { name: "NATS JetStream Broker", description: "Async messaging, event streaming, exactly-once delivery" },
        { name: "index-service Gateway", description: "Single entry point routing all 645 API routes" },
        { name: "mongodb-service", description: "Centralised DB access layer with 134 collections" },
        { name: "auth-service", description: "Auth0 integration, JWT validation, M2M token issuance" },
        { name: "appointment-service", description: "Scheduling, slots, availability management" },
        { name: "billing-service", description: "Stripe invoicing, insurance claims, payment plans" },
        { name: "notification-service", description: "Email, SMS, and in-app push notifications" },
      ],
      icon: Server,
      color: "purple",
    },
    {
      category: "Data & Security",
      items: [
        { name: "Auth0 — 13 RBAC Roles", description: "SuperAdmin, Admin, Doctor, Nurse, Patient, Receptionist and more" },
        { name: "JWT Dual-Layer Validation", description: "Auth0 RS256 tokens + custom M2M inter-service tokens" },
        { name: "646 Route-Permission Entries", description: "Fine-grained per-route access control matrix" },
        { name: "MongoDB — 134 Collections", description: "Document model optimised for healthcare data isolation" },
        { name: "Redis Caching", description: "Session store, rate-limiting, and hot-data caching" },
        { name: "AWS S3", description: "Secure media storage for clinical documents and images" },
      ],
      icon: Database,
      color: "green",
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        { name: "GCP / GKE", description: "Google Kubernetes Engine for container orchestration" },
        { name: "Terraform IaC", description: "Declarative infrastructure provisioning and state management" },
        { name: "ArgoCD GitOps", description: "Continuous deployment via Git-driven reconciliation" },
        { name: "Docker Multi-Stage Builds", description: "Optimised images with minimal production footprint" },
        { name: "SonarQube + Trivy", description: "Static code analysis and container vulnerability scanning" },
        { name: "Nginx API Gateway", description: "Load balancing, SSL termination, and reverse proxy" },
      ],
      icon: Cloud,
      color: "orange",
    },
  ];

  const features = [
    {
      title: "Patient Management",
      description:
        "Comprehensive multi-tenant patient records with appointment scheduling, medical history, demographics, and consent management. Fully isolated per clinic with role-based data visibility.",
      icon: Users,
      color: "blue",
    },
    {
      title: "Clinical Documentation",
      description:
        "AI-powered clinical notes using AWS Transcribe for real-time speech-to-text. Supports SOAP notes, prescription generation, and structured data capture with physician review workflows.",
      icon: Mic,
      color: "green",
    },
    {
      title: "Billing & Payments",
      description:
        "End-to-end billing powered by Stripe — invoicing, insurance claims, co-pay collection, and payment plans. Supports multi-payer workflows with automated reconciliation.",
      icon: CreditCard,
      color: "purple",
    },
    {
      title: "Real-time Communication",
      description:
        "WebRTC peer-to-peer video/audio consultations with Centrifugo WebSocket for real-time chat, presence indicators, and live notification delivery across all connected clients.",
      icon: Video,
      color: "orange",
    },
    {
      title: "Multi-tenant Architecture",
      description:
        "Each clinic operates in a fully isolated tenant context with separate data boundaries, custom branding, and independent configuration — all within a shared infrastructure.",
      icon: Building2,
      color: "teal",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Auth0-powered RBAC with 13 distinct roles and 646 route-permission entries. Every API route is protected by a fine-grained permission matrix validated at the gateway level.",
      icon: Shield,
      color: "red",
    },
    {
      title: "Microservices Backend",
      description:
        "17 independently deployable Node.js/Express.js services communicating asynchronously via NATS JetStream. Each service owns its domain with a single mongodb-service gateway for DB access.",
      icon: Layers,
      color: "pink",
    },
    {
      title: "Analytics & Reporting",
      description:
        "D3.js-powered dashboards for revenue analytics, patient flow, appointment utilisation, and clinical outcomes. Supports custom date ranges, export to PDF/Excel, and scheduled report delivery.",
      icon: BarChart3,
      color: "yellow",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────
  // GSAP PAGE ENTRANCE ANIMATIONS — ENHANCED CINEMATIC VERSION
  // ─────────────────────────────────────────────────────────────────────────────
  useGSAP(
    () => {
      const page = pageRef.current;
      if (!page) return;

      const mm = gsap.matchMedia();

      // ═══════════════════════════════════════════════════════════════════════
      // DESKTOP — Premium cinematic page entrance with dramatic effects
      // ═══════════════════════════════════════════════════════════════════════
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          // ─── PHASE 1: Hero section entrance — Multi-layer reveal ───
          const heroSection = heroRef.current;
          if (heroSection) {
            const logo = heroSection.querySelector(".hero-logo");
            const subtitle = heroSection.querySelector(".hero-subtitle");
            const badges = heroSection.querySelectorAll(".hero-badge");
            const description = heroSection.querySelector(".hero-description");

            if (logo) {
              gsap.set(logo, {
                opacity: 0,
                scale: 0.3,
                rotateY: -180,
                rotateZ: -15,
                transformPerspective: 1200,
                filter: "brightness(2)",
              });
              tl.to(
                logo,
                {
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  rotateZ: 0,
                  filter: "brightness(1)",
                  duration: 1.2,
                  ease: "elastic.out(1, 0.5)",
                },
                0
              );
            }

            if (titleRef.current) {
              const titleSplit = new SplitText(titleRef.current, {
                type: "chars",
                mask: "chars",
              });
              gsap.set(titleSplit.chars, {
                opacity: 0,
                y: 120,
                rotateX: -90,
                rotateY: gsap.utils.wrap([-20, 20, -15, 15, -10, 10]),
                scale: 0.5,
                transformPerspective: 1200,
                transformOrigin: "center bottom",
              });
              tl.to(
                titleSplit.chars,
                {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                  duration: 1,
                  stagger: { each: 0.04, from: "start", ease: "power2.out" },
                  ease: "back.out(1.7)",
                },
                0.15
              );
            }

            if (subtitle) {
              gsap.set(subtitle, {
                opacity: 0,
                x: 80,
                filter: "blur(10px)",
              });
              tl.to(
                subtitle,
                {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  duration: 0.8,
                  ease: "power3.out",
                },
                0.5
              );
            }

            if (badges.length > 0) {
              badges.forEach((badge, i) => {
                const directions = [
                  { x: -40, y: 30, rotate: -15 },
                  { x: 0, y: 50, rotate: 0 },
                  { x: 40, y: 30, rotate: 15 },
                ];
                const dir = directions[i % directions.length];
                gsap.set(badge, {
                  opacity: 0,
                  scale: 0,
                  x: dir.x,
                  y: dir.y,
                  rotation: dir.rotate,
                });
              });
              tl.to(
                badges,
                {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotation: 0,
                  duration: 0.8,
                  stagger: 0.12,
                  ease: "elastic.out(1, 0.4)",
                },
                0.7
              );
            }

            if (description) {
              const descSplit = new SplitText(description, {
                type: "words",
                wordsClass: "gsap-word",
              });
              gsap.set(descSplit.words, {
                opacity: 0,
                y: 25,
                filter: "blur(4px)",
              });
              tl.to(
                descSplit.words,
                {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  duration: 0.5,
                  stagger: 0.02,
                  ease: "power2.out",
                },
                1.0
              );
            }
          }

          // ─── PHASE 2: Tech Stack — Icon spring + content lift ───
          if (techStackRef.current) {
            const techIcon = techStackRef.current.querySelector(".section-icon");
            const techTitle = techStackRef.current.querySelector(".section-title");
            const techSubtitle = techStackRef.current.querySelector(".section-subtitle");
            const techContent = techStackRef.current.querySelector(".section-content");

            if (techIcon) {
              gsap.set(techIcon, { scale: 0, rotation: -180 });
              gsap.to(techIcon, {
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "elastic.out(1, 0.4)",
                scrollTrigger: {
                  trigger: techStackRef.current,
                  start: "top 80%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (techTitle) {
              gsap.set(techTitle, { opacity: 0, x: -60, filter: "blur(8px)" });
              gsap.to(techTitle, {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: techStackRef.current,
                  start: "top 78%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (techSubtitle) {
              gsap.set(techSubtitle, { opacity: 0, y: 20 });
              gsap.to(techSubtitle, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: techStackRef.current,
                  start: "top 76%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (techContent) {
              gsap.set(techContent, {
                opacity: 0,
                y: 80,
                scale: 0.9,
                rotateX: 20,
                transformPerspective: 1200,
                transformOrigin: "center top",
              });
              gsap.to(techContent, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: techStackRef.current,
                  start: "top 70%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }
          }

          // ─── PHASE 3: Architecture — Dramatic card reveal ───
          if (architectureRef.current) {
            const archIcon = architectureRef.current.querySelector(".section-icon");
            const archTitle = architectureRef.current.querySelector(".section-title");
            const archSubtitle = architectureRef.current.querySelector(".section-subtitle");
            const archContent = architectureRef.current.querySelector(".section-content");

            if (archIcon) {
              gsap.set(archIcon, { scale: 0, rotation: -180 });
              gsap.to(archIcon, {
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "elastic.out(1, 0.4)",
                scrollTrigger: {
                  trigger: architectureRef.current,
                  start: "top 80%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (archTitle) {
              gsap.set(archTitle, { opacity: 0, x: -60, filter: "blur(8px)" });
              gsap.to(archTitle, {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: architectureRef.current,
                  start: "top 78%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (archSubtitle) {
              gsap.set(archSubtitle, { opacity: 0, y: 20 });
              gsap.to(archSubtitle, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: architectureRef.current,
                  start: "top 76%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (archContent) {
              gsap.set(archContent, {
                opacity: 0,
                y: 100,
                scale: 0.85,
                rotateX: 25,
                transformPerspective: 1400,
                transformOrigin: "center top",
              });
              gsap.to(archContent, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: architectureRef.current,
                  start: "top 70%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }
          }

          // ─── PHASE 4: Features — Grid reveal with stagger ───
          if (featuresRef.current) {
            const featIcon = featuresRef.current.querySelector(".section-icon");
            const featTitle = featuresRef.current.querySelector(".section-title");
            const featSubtitle = featuresRef.current.querySelector(".section-subtitle");
            const featContent = featuresRef.current.querySelector(".section-content");

            if (featIcon) {
              gsap.set(featIcon, { scale: 0, rotation: -180 });
              gsap.to(featIcon, {
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "elastic.out(1, 0.4)",
                scrollTrigger: {
                  trigger: featuresRef.current,
                  start: "top 80%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (featTitle) {
              gsap.set(featTitle, { opacity: 0, x: -60, filter: "blur(8px)" });
              gsap.to(featTitle, {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: featuresRef.current,
                  start: "top 78%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (featSubtitle) {
              gsap.set(featSubtitle, { opacity: 0, y: 20 });
              gsap.to(featSubtitle, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: featuresRef.current,
                  start: "top 76%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }

            if (featContent) {
              gsap.set(featContent, {
                opacity: 0,
                y: 120,
                scale: 0.8,
                rotateX: 30,
                transformPerspective: 1500,
                transformOrigin: "center top",
              });
              gsap.to(featContent, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: featuresRef.current,
                  start: "top 70%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }
          }

          // ─── PHASE 5: Summary — Cinematic card entrance ───
          if (summaryRef.current) {
            gsap.set(summaryRef.current, {
              opacity: 0,
              y: 100,
              scale: 0.85,
              rotateX: 20,
              transformPerspective: 1400,
              transformOrigin: "center top",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            });
            gsap.to(summaryRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: summaryRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            });

            const summaryCards = summaryRef.current.querySelectorAll(".summary-card");
            if (summaryCards.length > 0) {
              gsap.set(summaryCards, {
                opacity: 0,
                y: 50,
                scale: 0.9,
              });
              gsap.to(summaryCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.4)",
                scrollTrigger: {
                  trigger: summaryRef.current,
                  start: "top 70%",
                  toggleActions: "play reverse play reverse",
                },
              });
            }
          }
        }
      );

      // ═══════════════════════════════════════════════════════════════════════
      // MOBILE — Simplified but still engaging animations
      // ═══════════════════════════════════════════════════════════════════════
      mm.add("(max-width: 767px)", () => {
        const mobileTl = gsap.timeline();

        if (heroRef.current) {
          const logo = heroRef.current.querySelector(".hero-logo");
          const badges = heroRef.current.querySelectorAll(".hero-badge");

          if (logo) {
            gsap.set(logo, { opacity: 0, scale: 0.8, y: -20 });
            mobileTl.to(logo, { opacity: 1, scale: 1, y: 0, duration: 0.5 }, 0);
          }

          if (titleRef.current) {
            gsap.set(titleRef.current, { opacity: 0, y: 30 });
            mobileTl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.1);
          }

          if (badges.length > 0) {
            gsap.set(badges, { opacity: 0, scale: 0.8 });
            mobileTl.to(badges, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 }, 0.3);
          }
        }

        const sections = [techStackRef.current, architectureRef.current, featuresRef.current, summaryRef.current].filter(Boolean);
        sections.forEach((section) => {
          if (section) {
            gsap.set(section, { opacity: 0, y: 50 });
            gsap.to(section, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            });
          }
        });
      });

      // ═══════════════════════════════════════════════════════════════════════
      // REDUCED MOTION — Instant visibility
      // ═══════════════════════════════════════════════════════════════════════
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const allSections = [heroRef.current, techStackRef.current, architectureRef.current, featuresRef.current, summaryRef.current].filter(Boolean);
        allSections.forEach((section) => {
          if (section) {
            gsap.set(section, { opacity: 1, clearProps: "all" });
          }
        });
      });
    },
    { scope: pageRef }
  );

  // ─────────────────────────────────────────────────────────────────────────────
  // ROUTE TRANSITION ANIMATIONS
  // ─────────────────────────────────────────────────────────────────────────────
  useGSAPRouteAnimation({
    containerRef: pageRef,
    transitionType: "home-to-project",
    enabled: location.state?.from !== undefined,
  });

  // Prepare InteractiveGrid items for features
  const interactiveGridItems: InteractiveGridItem[] = useMemo(
    () =>
      features.map((feature) => {
        const Icon = feature.icon;
        return {
          id: feature.title,
          title: feature.title,
          description: feature.description,
          icon: <Icon className="w-6 h-6" />,
          color: feature.color,
        };
      }),
    [features]
  );

  // Prepare AccordionTabs items for architecture
  const accordionTabItems: AccordionTabItem[] = useMemo(
    () =>
      architecture.map((arch) => {
        const Icon = arch.icon;
        return {
          id: arch.category,
          label: arch.category,
          icon: <Icon className="w-4 h-4" />,
          color: arch.color,
          badge: arch.items.length,
          content: (
            <div className="space-y-3">
              {arch.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  style={{
                    animation: `slideInLeft 0.4s ease-out ${itemIdx * 0.05}s both`,
                  }}
                  className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 group"
                >
                  <h4 className="font-semibold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ),
        };
      }),
    [architecture]
  );

  return (
    <div ref={pageRef} className="min-h-screen bg-transparent relative route-enter-content">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button and Share */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3 sm:gap-4 route-enter-child">
          <button
            onClick={(e) => {
              e.preventDefault();
              const scrollY = saveScrollPosition();
              navigate("/", {
                state: {
                  scrollTo: "projects",
                  scrollY,
                  from: "home-to-project",
                },
              });
            }}
            className="cursor-pointer flex items-center gap-2 text-foreground hover:text-primary transition-colors group touch-manipulation"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm sm:text-base">Back</span>
          </button>
          <ShareButton
            shareData={{
              title: "EverBetter - Healthcare SaaS Platform",
              description:
                "Multi-tenant healthcare SaaS built with Next.js 15, React 19, and 17 Node.js/Express.js microservices communicating via NATS JetStream.",
              url: getCurrentUrl(),
            }}
            variant="outline"
            size="md"
            showLabel={true}
            position="bottom"
            className="shrink-0 cursor-pointer"
          />
        </div>

        {/* Hero Header */}
        <div ref={heroRef} className="mb-16 route-enter-child">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="p-4 rounded-2xl bg-transparent flex items-center justify-center min-w-[120px] h-[120px] hero-logo">
              <img
                src="/everbetter-logo.svg"
                alt="EverBetter Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex-1">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2"
              >
                EverBetter
              </h1>
              <p className="text-lg text-muted-foreground mb-2 hero-subtitle">
                Healthcare SaaS Platform • Multi-tenant
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="success" size="lg" className="hero-badge">
                  Live & Active
                </Badge>
                <Badge variant="info" size="lg" className="hero-badge">
                  2+ Years
                </Badge>
                <Badge variant="default" size="lg" className="hero-badge">
                  Production
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl hero-description">
            Multi-tenant healthcare SaaS platform built with Next.js 15, React 19, and 17 Node.js/Express.js
            microservices communicating via NATS JetStream. Features Auth0 RBAC with 13 roles, WebRTC video
            consultations, AWS Transcribe clinical documentation, Stripe billing, and a full GCP/GKE deployment
            pipeline managed with Terraform and ArgoCD.
          </p>
        </div>

        {/* Technology Stack - LogoLoop */}
        <div ref={techStackRef} className="mb-16 relative">
          {!isDarkMode && (
            <Suspense fallback={null}>
              <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#07eae6"
                  raysSpeed={1}
                  lightSpread={12}
                  rayLength={0.7}
                  followMouse={true}
                  mouseInfluence={0.1}
                  className="w-full h-full"
                />
              </div>
            </Suspense>
          )}

          <div className="mb-6 relative z-10 section-header">
            <div className="mb-2 flex items-center gap-2">
              <div className="section-icon">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold section-title">Technology Stack</h2>
            </div>
            <p className="text-muted-foreground section-subtitle">
              Modern, scalable technologies powering the platform
            </p>
          </div>
          <div className="relative py-8 px-2 rounded-2xl bg-transparent section-content">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              scaleOnHover={true}
              className="w-full"
              ariaLabel="Technology stack logos"
            />
          </div>
        </div>

        {/* Architecture & Services - AccordionTabs */}
        <div ref={architectureRef} className="mb-16 relative">
          <div className="mb-6 section-header">
            <div className="mb-2 flex items-center gap-2">
              <div className="section-icon">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold section-title">Architecture & Services</h2>
            </div>
            <p className="text-muted-foreground section-subtitle">
              17 microservices, NATS JetStream messaging, and enterprise-grade security
            </p>
          </div>
          <div className="section-content">
            <AccordionTabs
              items={accordionTabItems}
              defaultActiveId={accordionTabItems[0]?.id}
              orientation="horizontal"
              className="w-full"
            />
          </div>
        </div>

        {/* Key Features & Capabilities - InteractiveGrid */}
        <div ref={featuresRef} className="mb-16 relative">
          <div className="mb-6 section-header">
            <div className="mb-2 flex items-center gap-2">
              <div className="section-icon">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold section-title">Key Features & Capabilities</h2>
            </div>
            <p className="text-muted-foreground section-subtitle">
              Major development achievements and platform capabilities
            </p>
          </div>
          <div className="section-content">
            <InteractiveGrid
              items={interactiveGridItems}
              columns={2}
              enableHoverEffects={true}
              enableParticles={true}
              enableLightRays={true}
              className="w-full"
            />
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
                Enterprise healthcare SaaS platform with microservices architecture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg summary-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Project Name
                  </h3>
                  <p className="text-foreground font-medium text-lg mb-1">EverBetter</p>
                  <p className="text-sm text-muted-foreground">Healthcare SaaS Platform</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    17 microservices · 134 DB collections
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg summary-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    Duration
                  </h3>
                  <p className="text-foreground font-medium text-lg mb-1">2+ Years</p>
                  <p className="text-sm text-muted-foreground">Dec 2023 – Present</p>
                  <div className="mt-3 flex gap-2">
                    <Badge variant="info" size="sm">Active Development</Badge>
                    <Badge variant="outline" size="sm">Ongoing</Badge>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg summary-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    Status
                  </h3>
                  <Badge variant="success" size="lg" className="mb-3">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Live & Active
                  </Badge>
                  <p className="text-sm text-muted-foreground">Production environment</p>
                  <p className="text-xs text-muted-foreground mt-2">Multi-tenant · GCP / GKE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EverBetter;
