import { CardContent } from "@/components/ui/card";
import { GradientCard } from "@/components/common/GradientCard";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="animate-slide-in-from-bottom">
          <GradientCard className="max-w-3xl mx-auto bg-card/70 backdrop-blur-sm shadow-lg shadow-primary/10 relative">
            <CardContent className="p-8 md:p-12 lg:p-16 text-center flex flex-col items-center">
              <div className="relative inline-block mb-6">
                <div
                  style={{
                    position: 'absolute',
                    left: '0.5rem',
                    right: '0.5rem',
                    top: '0.25rem',
                    bottom: '0.25rem',
                    zIndex: -10,
                    borderRadius: '1rem',
                    filter: 'blur(24px)',
                    opacity: 0.6,
                    pointerEvents: 'none',
                    background: 'linear-gradient(90deg, #fde68a, #fb923c, #f472b6, #60a5fa, #34d399, #a78bfa, #fde68a)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient-move 4s ease-in-out infinite'
                  }}
                />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-text-glow px-6 py-2">
                Hi I'm Andrii
              </h1>
              </div>
              <p className="mb-4 text-lg text-muted-foreground">Let me introduce myself</p>
              <div className="absolute bottom-4">
                <a href="#about">
                  <svg
                    className="h-10 w-10 animate-chevron-gradient-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#chevron-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient id="chevron-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#fde68a">
                          <animate attributeName="stop-color" values="#fde68a;#fb923c;#f472b6;#fde68a" dur="2.5s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stop-color="#f472b6">
                          <animate attributeName="stop-color" values="#f472b6;#fde68a;#fb923c;#f472b6" dur="2.5s" repeatCount="indefinite" />
                        </stop>
                      </linearGradient>
                    </defs>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
