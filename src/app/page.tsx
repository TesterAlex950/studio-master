import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MyBackgroundSection } from "@/components/sections/MyBackgroundSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Separator } from "@/components/ui/separator";
import { InteractiveBackground } from "@/components/common/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <div className="relative z-10">
        <HeroSection />
        <main>
          <AboutSection />
          <MyBackgroundSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <footer className="relative z-10">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <Separator className="mb-6"/>
            <div className="flex flex-col md:flex-row items-center justify-center text-sm text-muted-foreground">
              <p>
                Made with passion, driven to be{' '}
                <span className="font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent animate-gradient-hue">
                  better
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
