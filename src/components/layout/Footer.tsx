
import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jennifer Dryden. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/jenniferdryden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/jenniferdryden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:jennifer.dryden@example.com"
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
