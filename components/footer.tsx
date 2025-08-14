import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.
            </p>
            <div className="flex gap-2">
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Desarrollo Web</li>
              <li>Diseño UI/UX</li>
              <li>Aplicaciones Móviles</li>
              <li>Consultoría Técnica</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-red-500" /> por Tu Nombre © 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
