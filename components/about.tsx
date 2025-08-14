import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code,
      title: "Desarrollo Full Stack",
      description: "Experiencia en frontend y backend con tecnologías modernas",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Creación de interfaces intuitivas y experiencias de usuario excepcionales",
    },
    {
      icon: Zap,
      title: "Rendimiento",
      description: "Optimización de aplicaciones para máxima velocidad y eficiencia",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo efectivo en equipos ágiles y comunicación clara",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soy un desarrollador apasionado con más de 3 años de experiencia creando soluciones digitales innovadoras y
            centradas en el usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Mi Historia</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Comencé mi viaje en el desarrollo web hace varios años, fascinado por la posibilidad de crear
                experiencias digitales que impacten positivamente en la vida de las personas.
              </p>
              <p>
                A lo largo de mi carrera, he trabajado en proyectos diversos, desde aplicaciones web complejas hasta
                sitios corporativos, siempre enfocándome en la calidad del código y la experiencia del usuario.
              </p>
              <p>
                Mi enfoque combina habilidades técnicas sólidas con un ojo para el diseño, lo que me permite crear
                soluciones completas y efectivas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
