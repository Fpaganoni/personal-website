import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello there, I'm{" "}
              <span className="text-primary">Franco Paganoni</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I create exceptional digital experiences by combining clean code
              with intuitive design. Specializing in React, TypeScript, Next.js,
              and modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-8">
              <Button asChild className="cursor-pointer text-md">
                <a href="mailto:franco.paganoni1@gmail.com">
                  <Mail className="h-5 w-5" />
                  Contact me
                </a>
              </Button>
              <Button asChild className="cursor-pointer text-md">
                <a
                  href="/cv/Franco-Paganoni-Fullstack-Developer.pdf"
                  download="Franco-Paganoni-Fullstack-Developer.pdf"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild className="cursor-pointer ">
                <a href="https://github.com/Fpaganoni" target="_blank">
                  <FaGithub className="size-5" />
                </a>
              </Button>
              <Button asChild className="cursor-pointer ">
                <a
                  href="https://www.linkedin.com/in/franco-paganoni-a100aa245/?locale=en_US"
                  className="inline-block p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                  target="_blank"
                >
                  <FaLinkedin className="size-5" />
                </a>
              </Button>
              <Button asChild className="cursor-pointer">
                <a
                  href="mailto:franco.paganoni1@gmail.com?subject=Professional Inquiry&body=Hello, I would like to contact you about..."
                  className="inline-block p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                >
                  <HiMail className="size-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="https://ik.imagekit.io/p2ho5d9bi/Portfolio/Pefil%20-%20CV.png?updatedAt=1754667885113"
                  alt="Profile photo"
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
  );
}
