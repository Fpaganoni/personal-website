import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Sitio web portfolio responsivo con animaciones suaves y diseño moderno.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con pronósticos detallados y visualizaciones interactivas.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web y diseño de
            interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
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
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Ver Proyecto
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
