import { useRef, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useInView } from "motion/react";

// Componente separado para cada barra de habilidad
function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Pequeño delay antes de iniciar la animación
      const timeout = setTimeout(() => {
        setAnimatedValue(level);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    } else {
      // Resetear a 0 cuando sale de la vista para que se anime de nuevo
      setAnimatedValue(0);
    }
  }, [isInView, level, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} animatedValue={animatedValue} className="h-2" />
    </div>
  );
}

export { SkillBar };
