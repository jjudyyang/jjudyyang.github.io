import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-[url('@/assets/images/whitebackgroundtexture.jpg')] dark:bg-[url('@/assets/images/blackbackgroundtexture.jpg')] bg-cover bg-no-repeat">
      {/* Squiggly divider */}
      <svg
        className="absolute left-0 -top-2 w-full h-4 transform rotate-180"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4 Q 12.5 8, 25 4 T 50 4 T 75 4 T 100 4"
          stroke="hsl(var(--foreground))" strokeWidth="1" fill="none"
        />
      </svg>
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6 py-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} judy - made with &lt;3 in yyc.
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/jjudyyang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/jjudyyang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:j636yang@uwaterloo.ca"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail size={20} />
          </a>
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/case-studies" className="text-xs text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/blog" className="text-xs text-muted-foreground hover:text-foreground">
            Blog
          </Link>
        </nav>
      </div>
    </footer>
  );
}
