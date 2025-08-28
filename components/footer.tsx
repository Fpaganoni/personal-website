import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating exceptional digital
              experiences.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Fpaganoni"
                target="_blank"
                className="inline-flex items-center cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 p-1.5 rounded-md dark:bg-transparent "
              >
                <FaGithub className="size-5 text-background dark:text-foreground" />
              </a>
              <a
                className="inline-flex items-center cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 p-1.5 rounded-md dark:bg-transparent "
                href="https://www.linkedin.com/in/franco-paganoni-a100aa245/?locale=en_US"
                target="_blank"
              >
                <FaLinkedin className="size-5 text-background dark:text-foreground" />
              </a>
              <a
                href="mailto:franco.paganoni1@gmail.com?subject=Professional Inquiry&body=Hello, I would like to contact you about..."
                className="inline-flex items-center cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 p-1.5 rounded-md dark:bg-transparent "
              >
                <Mail className="size-5 text-background dark:text-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Applications</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Franco
            Paganoni © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
