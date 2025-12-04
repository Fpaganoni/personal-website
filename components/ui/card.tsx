"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./button";
import { Badge } from "./badge";

interface CardMotionProps {
  initial?: HTMLMotionProps<"div">["initial"];
  animate?: HTMLMotionProps<"div">["animate"];
  whileInView?: HTMLMotionProps<"div">["whileInView"];
  whileHover?: HTMLMotionProps<"div">["whileHover"];
  transition?: HTMLMotionProps<"div">["transition"];
  viewport?: HTMLMotionProps<"div">["viewport"];
}

interface CardProps
  extends Omit<
    HTMLMotionProps<"div">,
    | "initial"
    | "animate"
    | "whileInView"
    | "whileHover"
    | "transition"
    | "viewport"
  > {
  motionProps?: CardMotionProps;
  className?: string;
}

// Componente para manejar la animación de cada card individualmente
interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // useScroll para trackear el progreso del scroll de este elemento específico
  const { scrollYProgress } = useScroll({
    target: cardRef,
    // offset: ["start end", "start start"]
    // "start end" = cuando el inicio del elemento toca el final del viewport
    // "start start" = cuando el inicio del elemento toca el inicio del viewport
    // Esto significa que el progreso irá de 0 a 1 mientras el elemento entra en vista
    offset: ["start end", "end start"],
  });

  // Transformar el progreso del scroll a valores de opacidad
  // Cuando scrollYProgress es 0.2 (20% visible) -> opacidad 0
  // Cuando scrollYProgress es 0.3 (30% visible) -> opacidad 1
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.2, 1]);

  // Animar el translateY para un efecto más suave
  const y = useTransform(scrollYProgress, [0, 0.6], [100, 0]);

  // Animar el scale de 0.2 a 1 (similar a la animación anterior)
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.3], [0.2, 0.6, 1]);

  // Opcional: agregar una rotación sutil
  const rotate = useTransform(scrollYProgress, [0, 0.1, 0.3], [-12, -8, 0]);

  // Opcional: blur effect que desaparece
  // const blur = useTransform(scrollYProgress, [0, 0.2, 0.3], [10, 5, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity,
        y,
        scale,
        rotate,
      }}
      className="will-change-[opacity,transform,filter]"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
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
    </motion.div>
  );
}

function Card({ className, motionProps, ...props }: CardProps) {
  return (
    <motion.div
      initial={motionProps?.initial}
      animate={motionProps?.animate}
      whileInView={motionProps?.whileInView}
      whileHover={motionProps?.whileHover}
      transition={motionProps?.transition}
      viewport={motionProps?.viewport}
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  ProjectCard,
};
