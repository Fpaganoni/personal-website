import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Frontend and backend experience with modern technologies",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive interfaces and exceptional user experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for maximum speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Effective work in agile teams and clear communication",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I am a Full Stack Developer specializing in React and TypeScript,
            passionate about building robust and scalable web solutions. My
            focus is on creating clean, modular, and high-quality code, applying
            best practices at every stage of the development lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I've always been super curious about how tech works. I started
                out building simple websites, but soon found my real passion was
                full-stack development—creating robust, real-world solutions.
                That's why I specialize in React and TypeScript; they're the
                tools that help me build things efficiently.
              </p>
              <p>
                Working on a bunch of different projects, from freelance gigs to
                a bootcamp team, taught me a lot. I learned that teamwork is
                key, and I got used to working in agile environments. I'm all
                about writing clean, modular code that's easy to scale and
                maintain, and I stick to best practices in everything I do.
              </p>
              <p>
                Today, I'm all about continuous learning and using the best
                tools out there. I see AI as a partner, not a replacement, that
                helps me optimize my workflow so I can focus on the cool,
                complex stuff. My ultimate goal is to team up with people who
                have big ideas to make a real, lasting impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
