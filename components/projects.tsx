import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "This is a comprehensive full-stack e-commerce platform that handles everything from product display to order fulfillment. Built with modern technologies like Next.js and Node.js, it includes a fully functional shopping cart, secure payment integration, and a powerful inventory management system. The user interface is crafted with React and Tailwind CSS to be both elegant and responsive, ensuring a smooth experience for both customers and administrators.",
      image:
        "https://ik.imagekit.io/p2ho5d9bi/Portfolio/e-commerce-page.png?updatedAt=1755253334062",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Node.js",
        "Tailwind",
      ],
      liveUrl: "https://e-commerce-xi-ten-67.vercel.app/",
      githubUrl: "https://github.com/Fpaganoni/E-commerce",
    },
    {
      title: "NFT Responsive Card 3D",
      description:
        "This is a responsive NFT preview card built using HTML, CSS and JavaScript as part of a frontend learning challenge. It features a clean, modern design showcasing an NFT with hover and 3D effects, mobile responsiveness ",
      image:
        "https://ik.imagekit.io/p2ho5d9bi/Portfolio/nft-responsive-card.png?updatedAt=1755261496833",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://nft-responsive-card.vercel.app/",
      githubUrl: "https://github.com/Fpaganoni/NFT-responsive-card",
    },
    {
      title: "Incident Management Application",
      description:
        "Incident Management Application This repository contains a modern and comprehensive web application for managing and resolving incidents. Created by a team of developers to optimize the support workflow, this tool allows users to report problems and enables support agents to efficiently manage, assign, and track them.",
      image:
        "https://ik.imagekit.io/p2ho5d9bi/Portfolio/solvex-front_eieO9IEXh?updatedAt=1755702844913",
      technologies: [
        "React",
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
        "TanStack Query",
      ],
      liveUrl: "https://solvex-front-iota.vercel.app/",
      githubUrl: "https://github.com/Fpaganoni/solvex-front/tree/main",
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard del clima con pronósticos detallados y visualizaciones interactivas.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills and experience in
            web development and interface design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      See Project
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank">
                      <FaGithub className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
