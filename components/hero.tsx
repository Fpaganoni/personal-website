import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hola, soy <span className="text-primary">Tu Nombre</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Desarrollador Full Stack & Diseñador UI/UX</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Creo experiencias digitales excepcionales combinando código limpio con diseño intuitivo. Especializado en
              React, Next.js y tecnologías modernas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Contáctame
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                Descargar CV
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Foto de perfil"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
