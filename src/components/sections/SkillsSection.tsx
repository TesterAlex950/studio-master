"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/common/FadeIn";
import { AreaChart, GitCompareArrows, Goal, MousePointerClick, ThumbsUp, Wallet, BrainCircuit, Users, Lightbulb, Paintbrush, Globe } from "lucide-react";
import { GradientCard } from "../common/GradientCard";
import { FlippingCard } from "../common/FlippingCard";
import { ReactNode } from "react";
import { useState } from "react";

const hardSkills = [
  {
    name: "Google Ads",
    description: "Campaign setup, management, and optimization.",
    icon: <MousePointerClick className="h-8 w-8 text-primary" />,
    details: [
      "Knowledge of Google Ads, GA4, and GTM",
      "Data visualization with Looker Studio",
      "Basics of campaign structure, bidding, and ad quality"
    ]
  },
  {
    name: "Meta Ads",
    description: "Audience targeting, ad creation, and performance tracking.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 18.6566C21.5018 14.6317 18.4715 11.5552 14.9786 11.5552C11.4857 11.5552 5.0286 16.1815 5.0286 27.0072C5.0286 34.9876 7.1798 36.4449 9.4699 36.4449C15.3685 36.4449 21.6372 24.2545 24.5286 18.6566Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 18.6566C26.4982 14.6317 29.5285 11.5552 33.0214 11.5552C36.5143 11.5552 42.9714 16.1815 42.9714 27.0072C42.9714 34.9876 40.8202 36.4449 38.5301 36.4449C32.6315 36.4449 26.3628 24.2545 23.4714 18.6566Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: [
      "Knowledge of Ads Manager and campaign objectives",
      "Audience targeting, placements, and creatives",
      "Basics of Pixel, events, and performance metrics"
    ]
  },
  {
    name: "Marketing Metrics & Analysis",
    description: "Tracking, reporting, and deriving insights from data.",
    icon: <AreaChart className="h-8 w-8 text-primary" />,
    details: [
      "Understanding of CPM, CPC, CTR, CPA, ROAS",
      "Evaluating funnel stages and campaign KPIs",
      "Using metrics to guide media buying"
    ]
  },
  {
    name: "Ads & Creatives",
    description: "Improving campaign effectiveness and landing page performance.",
    icon: <Goal className="h-8 w-8 text-primary" />,
    details: [
      "Understanding ad types: banners, carousels, video, stories",
      "Ad creative principles: visual hierarchy, messaging, CTA",
      "Analyzing ad performance based on scroll depth, CTR, engagement"
    ]
  },
];

const softSkills = [
  {
    name: "Analytical Thinking",
    description: "Interpreting data to make informed decisions and find trends.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    details: [
      "Spotting patterns everywhere",
      "Deep data dives",
      "Always searching for the 'why', not just the 'what'"
    ]
  },
  {
    name: "Collaboration",
    description: "Working effectively with teams to achieve common goals.",
    icon: <Users className="h-8 w-8 text-primary" />,
    details: [
      "Strong team player with excellent communication skills",
      "Able to coordinate tasks and work effectively across departments",
      "Open to feedback and skilled at resolving conflicts constructively"
    ]
  },
  {
    name: "Problem-Solving",
    description: "Identifying issues and implementing effective solutions.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    details: [
      "Finds solutions even in dead ends",
      "Google search master",
      "Not afraid of tough challenges"
    ]
  },
  {
    name: "Creativity",
    description: "Developing innovative and effective advertising concepts.",
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    details: [
      <>But not today <AnimatedSmile isAnimating={false} /></>
    ]
  }
];

// Компонент для анімованого смайлика
function AnimatedSmile({ isAnimating }: { isAnimating: boolean }) {
  return (
    <div className="inline-block w-4 h-4 ml-1">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
        <path 
          d={isAnimating ? "M8 16C8 16 10 18 12 18S16 16 16 16" : "M8 16C8 16 10 14 12 14S16 16 16 16"}
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          className={isAnimating ? 'animate-mouth-morph' : ''}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
    </div>
  );
}

export function SkillsSection() {
  const [smileAnim, setSmileAnim] = useState(false);
  
  const handleCardHover = () => {
    if (!smileAnim) { // Запускаємо анімацію тільки якщо вона ще не запущена
      setSmileAnim(true);
      // НЕ скидаємо анімацію - смайлик залишається сумним
    }
  };
  
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <GradientCard className="max-w-4xl mx-auto bg-card/70 backdrop-blur-sm shadow-lg shadow-primary/10">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have cultivated a strong foundation in the essential tools and strategies for modern digital advertising.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter text-center mb-6 font-headline">Hard Skills</h3>
                  <div className="grid gap-6 sm:grid-cols-1">
                    {hardSkills.map((skill) => (
                      <FadeIn key={skill.name}>
                        <FlippingCard 
                          name={skill.name}
                          description={skill.description}
                          icon={skill.icon}
                          details={skill.name === "Creativity" ? 
                            <>But not today <AnimatedSmile isAnimating={smileAnim} /></> : 
                            skill.details
                          }
                        />
                      </FadeIn>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tighter text-center mb-6 font-headline">Soft Skills</h3>
                  <div className="grid gap-6 sm:grid-cols-1">
                    {softSkills.map((skill) => (
                      <FadeIn key={skill.name}>
                        <div onMouseEnter={skill.name === "Creativity" ? handleCardHover : undefined}>
                          <FlippingCard 
                            name={skill.name}
                            description={skill.description}
                            icon={skill.icon}
                            details={skill.name === "Creativity" ? 
                              <>But not today <AnimatedSmile isAnimating={smileAnim} /></> : 
                              skill.details
                            }
                          />
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </GradientCard>
        </FadeIn>
      </div>
    </section>
  );
}
