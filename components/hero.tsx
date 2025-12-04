"use client";

import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, transform: "translateY(-50px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hello there, I'm{" "}
              <span className="text-primary">Franco Paganoni</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, transform: "translateY(-50px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, transform: "translateY(-50px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              I create exceptional digital experiences by combining clean code
              with intuitive design. Specializing in React, TypeScript, Next.js,
              and modern technologies.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-8">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(-50px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              >
                <Button
                  asChild
                  className="cursor-pointer text-md hover:-translate-y-1 transition-transform duration-300"
                >
                  <a href="mailto:franco.paganoni1@gmail.com">
                    <Mail className="h-5 w-5" />
                    Contact me
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "translateY(-50px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
              >
                <Button
                  asChild
                  className="cursor-pointer text-md hover:-translate-y-1 transition-transform duration-300"
                >
                  <a
                    href="/cv/Franco-Paganoni-Fullstack-Developer.pdf"
                    download="Franco-Paganoni-Fullstack-Developer.pdf"
                  >
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, transform: "translateX(300px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.5 }}
              >
                <Button
                  asChild
                  className="cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  <a href="https://github.com/Fpaganoni" target="_blank">
                    <FaGithub className="size-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "translateX(325px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.6 }}
              >
                <Button
                  asChild
                  className="cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  <a
                    href="https://www.linkedin.com/in/franco-paganoni-a100aa245/?locale=en_US"
                    className="inline-block p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                    target="_blank"
                  >
                    <FaLinkedin className="size-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "translateX(350px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.7 }}
              >
                <Button
                  asChild
                  className="cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  <a
                    href="mailto:franco.paganoni1@gmail.com?subject=Professional Inquiry&body=Hello, I would like to contact you about..."
                    className="inline-block p-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                  >
                    <HiMail className="size-6" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, transform: "translateX(150px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20"
              >
                <Image
                  src="https://ik.imagekit.io/p2ho5d9bi/Portfolio/Pefil%20-%20CV.png?updatedAt=1754667885113"
                  alt="Profile photo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
