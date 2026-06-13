import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Settings2,
  Smile,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import SectionHeader from "../components/ui/SectionHeader";
import myHeroImg from "../assets/images/myHero.jpg";
import ctaImage from "../assets/images/me2.jpg";
import {
  capabilityGroups,
  experiences,
  outcomes,
  projectCarouselItems,
  proofStats,
  skills,
} from "../data/portfolioContent";

const iconMap = {
  trending: TrendingUp,
  settings: Settings2,
  rocket: Rocket,
  smile: Smile,
};

const Home = () => {
  const caseStudyTrackRef = useRef(null);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState(0);

  const scrollToCaseStudy = (index) => {
    const nextIndex =
      (index + projectCarouselItems.length) % projectCarouselItems.length;
    const track = caseStudyTrackRef.current;
    const target = track?.children[nextIndex];

    target?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveCaseStudyIndex(nextIndex);
  };

  const handleCaseStudyScroll = () => {
    const track = caseStudyTrackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    const closestIndex = cards.reduce((closest, card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const currentDistance = Math.abs(cardCenter - trackCenter);
      const closestCard = cards[closest];
      const closestDistance = Math.abs(
        closestCard.offsetLeft + closestCard.clientWidth / 2 - trackCenter
      );

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveCaseStudyIndex(closestIndex);
  };

  const goToNextCaseStudy = () => {
    scrollToCaseStudy(activeCaseStudyIndex + 1);
  };

  return (
    <main className="bg-white text-[#111111]">
      <Navbar />
      <section id="home"
        className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl grid-cols-1 gap-8 px-5 pb-8 pt-24 md:min-h-[calc(100vh-9rem)] md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pb-6 md:pt-28"
      >
        <div className="order-2 md:order-1">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-[#DC143C]">
            Fullstack Engineer 
          </p>
          <h1 className="text-[46px] font-extrabold leading-[0.95] tracking-normal text-[#111111] md:text-[76px]">
            Benedicta Davour
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#4B5563] md:text-lg">
            I design and build AI-integrated tools, booking
            systems, ecommerce flows, and operational dashboards.
          </p>
          <div className="mt-7 grid gap-3 sm:flex">
            <Button href="#case-studies" showArrow>
              View Case Studies
            </Button>
            <Button
              href="/Benedicta_Davour_Professional_Resume.pdf"
              variant="secondary"
              download="Benedicta_Davour_Resume.pdf"
            >
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[420px] md:order-2 md:max-w-[460px]">
          <div className="aspect-[3/4] overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F7F7F8]">
            <img
              src={myHeroImg}
              alt="Benedicta Davour"
              className="h-full w-full object-cover object-[50%_12%]"
            />
          </div>
          {/* <div className=" absolute -bottom-5 left-5 right-5 hidden rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_30px_rgba(17,17,17,0.08)] md:left-auto md:block md:w-80">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#DC143C]">
              Current focus
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4B5563]">
              Building useful frontend products with AI, dashboards, booking
              flows, and business-ready interfaces.
            </p>
          </div> */}
        </div>
      </section>

      <section id="ticker" className="overflow-hidden border-y border-[#E5E7EB] bg-[#111111] py-2.5 text-white">
        <div className="ticker-track flex w-max gap-5 whitespace-nowrap text-xs font-semibold leading-5 md:gap-8 md:text-sm md:leading-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center gap-5 md:gap-8">
              <span className="text-[#F7C9D2]">
                Available for web development roles and projects
              </span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/70">Next.js / Firebase / Supabase</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">AI tools</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">Booking</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">Ecommerce</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">Dashboards</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">Landing Pages</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">CMS</span>
              <span className="text-[#DC143C]">•</span>
              <span className="text-white/90">Custom CRM</span>
              <span className="text-[#DC143C]">•</span>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="border-b border-[#E5E7EB] bg-[#F7F7F8] px-5 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#DC143C]">
              Proof of Delivery
            </p>
            <h2 className="text-[28px] font-bold leading-tight text-[#111111] md:text-4xl">
              Real products, real workflows, with real users.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563]">
              From AI tools and booking systems to ecommerce flows, dashboards,
              and business websites, my work focuses on usable products, not just
              polished screens.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[#E5E7EB] bg-white p-5"
              >
                <p className="text-4xl font-extrabold text-[#DC143C] md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-bold leading-5 text-[#111111]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeader
          eyebrow="Outcomes"
          title="What I help businesses improve"
          description="Beyond just building interfaces, I build workflows that help businesses convert users, save time, and operate with more clarity."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => {
            const Icon = iconMap[outcome.icon];
            return (
              <div
                key={outcome.title}
                className="rounded-lg border border-[#E5E7EB] bg-white p-5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDECEF] text-[#DC143C]">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="bg-[#F7F7F8] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <SectionHeader
              eyebrow="Positioning"
              title="I turn product ideas into usable, client-ready web experiences."
              description="My work sits at the intersection of frontend engineering, product design, and business workflows."
            />
          </div>
          <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 md:p-8">
            <p className="text-base leading-7 text-[#4B5563] md:text-lg">
              I build interfaces that help users book services, manage data,
              generate content with AI, and complete key actions without
              confusion. The goal is always practical: make the workflow clearer,
              faster, and easier to use.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Product-minded frontend delivery",
                "Responsive mobile-first interfaces",
                "Business workflow awareness",
                "Clear communication and iteration",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-semibold text-[#111111]">
                  <CheckCircle2 className="mt-0.5 text-[#DC143C]" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies"
        className="mx-auto flex min-h-[100svh] max-w-6xl scroll-mt-16 flex-col justify-center px-5 py-8 md:scroll-mt-[72px] md:px-8 md:py-10"
      >
        <div className="mb-4 max-w-3xl md:mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#DC143C]">
            Case Studies
          </p>
          <h2 className="text-[28px] font-bold leading-tight text-[#111111] md:text-4xl">
            Featured projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5563] md:text-base md:leading-7">
            Find more information on each project in the case study deck.
          </p>
        </div>

        <div className="relative -mx-5 overflow-hidden md:-mx-8">
          <div
            ref={caseStudyTrackRef}
            onScroll={handleCaseStudyScroll}
            className="carousel-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 md:gap-6 md:px-8"
          >
            {projectCarouselItems.map((study, index) => (
              <article
                key={study.slug}
                className={`grid min-w-[86%] snap-center overflow-hidden rounded-lg border bg-white transition-all duration-300 md:min-w-[74%] md:grid-cols-[0.92fr_1.08fr] ${
                  index === activeCaseStudyIndex
                    ? "scale-100 border-[#D1D5DB] opacity-100 shadow-[0_18px_50px_rgba(17,17,17,0.14)]"
                    : "scale-[0.94] border-[#E5E7EB] opacity-40 shadow-none"
                }`}
              >
                <div className="relative min-h-44 overflow-hidden bg-[#F7F7F8] md:min-h-full">
                  <img
                    src={study.image}
                    alt={`${study.title} screenshot`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-3 md:hidden">
                    <Badge accent>{study.type}</Badge>
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-[#111111]"
                      aria-label={`Open ${study.title} live product`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-4 md:p-5">
                  <div className="hidden flex-wrap gap-2 md:flex">
                    <Badge accent>{study.type}</Badge>
                    <Badge>{study.access}</Badge>
                  </div>
                  <h3 className="text-[22px] font-bold leading-tight md:mt-3 md:text-[28px]">
                    {study.title}
                  </h3>
                  {/* <div className="mt-3 hidden grid-cols-2 gap-3 rounded-lg border border-[#E5E7EB] bg-[#F7F7F8] p-3 text-sm lg:grid">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#6B7280]">
                        Primary artifact
                      </p>
                      <p className="mt-1 font-bold text-[#111111]">Case-study deck</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#6B7280]">
                        Product access
                      </p>
                      <p className="mt-1 font-bold text-[#111111]">
                        {study.liveUrl ? "Live demo" : "Private/internal"}
                      </p>
                    </div>
                  </div> */}
                  <div className="mt-3 space-y-2 text-sm leading-6 text-[#4B5563] md:text-[15px]">
                    <p className="hidden sm:block">
                      <span className="font-bold text-[#111111]">Problem: </span>
                      {study.problem}
                    </p>
                    <p className="hidden sm:block">
                      <span className="font-bold text-[#111111]">Solution: </span>
                      {study.solution}
                    </p>
                    <p>
                      <span className="font-bold text-[#111111]">Value: </span>
                      {study.value}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.stack.slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Button
                      href={study.deckUrl || undefined}
                      aria-disabled={!study.deckUrl}
                      className={!study.deckUrl ? "pointer-events-none opacity-70" : ""}
                      target={study.deckUrl ? "_blank" : undefined}
                      rel={study.deckUrl ? "noreferrer" : undefined}
                    >
                      <FileText size={16} />
                      {study.deckUrl ? "Open Deck" : "Deck Coming Soon"}
                    </Button>
                    {study.liveUrl && (
                      <Button
                        href={study.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                      >
                        <ExternalLink size={16} />
                        Live Product
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#4B5563]">
            {activeCaseStudyIndex + 1} / {projectCarouselItems.length}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollToCaseStudy(activeCaseStudyIndex - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D1D5DB] bg-white text-[#111111] transition hover:border-[#DC143C] hover:text-[#DC143C]"
              aria-label="Previous case study"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={goToNextCaseStudy}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D1D5DB] bg-white text-[#111111] transition hover:border-[#DC143C] hover:text-[#DC143C]"
              aria-label="Next case study"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      <section id="experience" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DC143C]/5 via-white to-[#DC143C]/5" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Experience"
            title="Experience built around useful products"
            description="Roles, workflows, and technical responsibilities that shaped how I build."
            align="center"
          />
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="group relative overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#DC143C]/30" />
                <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#DC143C]/30" />
                <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#DC143C]/30" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#DC143C]/30" />

                <div className="border-b border-[#E5E7EB] bg-gradient-to-r from-[#DC143C]/5 to-transparent p-4 md:p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#111111]">{experience.role}</h3>
                      <p className="font-semibold text-[#DC143C]">{experience.company}</p>
                    </div>
                    <p className="text-sm font-medium text-[#6B7280]">{experience.period}</p>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="text-sm leading-6 text-[#4B5563] md:text-base">
                    {experience.descriptionParts.map((part, index) =>
                      typeof part === "string" ? (
                        <span key={`${experience.company}-copy-${index}`}>{part}</span>
                      ) : (
                        <span
                          key={`${experience.company}-highlight-${index}`}
                          className="mx-0.5 inline-block min-w-[120px] rounded bg-[#DC143C]/10 px-1 text-[#DC143C]"
                        >
                          <TypeAnimation
                            sequence={[
                              part.text,
                              2000,
                              "",
                              450,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={false}
                          />
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#DC143C]/10 bg-[#DC143C]/5 px-3 py-1 font-mono text-sm text-[#DC143C]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-[#E5E7EB] pt-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="h-3 w-3 rounded-full bg-[#DC143C]" />
                      <code className="font-mono">{experience.type}</code>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeader
          eyebrow="Skills"
          title="Skills, Stack and Tools"
          description="I use a combination of these tools and technologies to produce the best work"
        />
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-[#E5E7EB] bg-white p-5">
              <h3 className="text-lg font-bold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-8 rounded-lg border border-[#E5E7EB] bg-[#F7F7F8] p-5 md:p-6">
          {/* <div className="mb-5 flex items-center gap-3">
            <BriefcaseBusiness className="text-[#DC143C]" size={22} />
            <h3 className="text-xl font-bold">Full skills and tools list</h3>
          </div> */}
          <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.text}
                className="flex aspect-square min-w-0 flex-col items-center justify-center rounded-lg border border-[#E5E7EB] bg-white p-2 text-center sm:p-3"
              >
                {skill.icon ? (
                  <img src={skill.icon} alt="" className="mb-2 h-7 w-7 object-contain sm:h-8 sm:w-8" />
                ) : (
                  <div className="mb-2 h-8 w-8 rounded-md bg-[#FDECEF]" />
                )}
                <p className="text-xs font-bold leading-tight sm:text-sm">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <span id="contact" className="block h-0 scroll-mt-16 md:scroll-mt-[72px]" aria-hidden="true" />
      <section id="hire-me" className="bg-[#111111] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#F7C9D2]">
              Hire Me
            </p>
            <h2 className="text-[30px] font-bold leading-tight md:text-5xl">
              Let&apos;s discuss the role or project.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
              I am open to frontend, fullstack, contract, and product-build
              opportunities where thoughtful web engineering can move the
              business forward.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Frontend and fullstack roles",
                "AI-integrated web products",
                "Booking and workflow systems",
                "Dashboards and internal tools",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                  <BriefcaseBusiness size={17} className="shrink-0 text-[#F7C9D2]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
           
            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <a
                href="mailto:benedictadavour777@gmail.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={18} />
                benedictadavour777@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/eba-davour"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-white text-[#111111]">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="min-h-80 bg-[#F7F7F8]">
                <img
                  src={ctaImage}
                  alt="Benedicta Davour"
                  className="h-full w-full object-cover object-[50%_12%]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#DC143C]">
                  Start Here
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  The fastest way to reach me
                </h3>
                <p className="mt-4 text-base leading-7 ">
                  Send the role, contract brief, or product problem. I will
                  review the context and respond with the next practical step.
                </p>
                
                <div className="mt-6 grid gap-3">
                  <Button href="mailto:benedictadavour777@gmail.com" className="w-full">
                    <Mail size={16} />
                    Email Me
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/eba-davour"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="w-full"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </Button>
                  <Button href="#case-studies" variant="secondary" className="w-full">
                    <FileText size={16} />
                    View Case Studies
                  </Button>
                  <Button
                    href="https://github.com/Benny-Dav"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="w-full"
                  >
                    <Github size={16} />
                    View GitHub
                  </Button>
                  <Button
                    href="/Benedicta_Davour_Professional_Resume.pdf"
                    download="Benedicta_Davour_Resume.pdf"
                    variant="secondary"
                    className="w-full"
                  >
                    <Download size={16} />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
